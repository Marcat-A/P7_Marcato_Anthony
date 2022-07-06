const bcrypt = require("bcrypt");
const jwtUtils = require("../utils/jwtUtils");
const models = require("../models");

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/;

module.exports = {
  register: function (req, res) {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const bio = req.body.bio;

    if (email === null || username === null || password === null) {
      return res.status(400).json({ message: "Merci de compléter les champs" });
    }

    if (username.length >= 20 || username.length <= 4) {
      return res.status(400).json({
        message:
          "La longueur du pseudo doit contenir entre 4 et 20 caractères.",
      });
    }

    if (!EMAIL_REGEX.test(email)) {
      return res
        .status(400)
        .json({ message: "Merci d'utiliser un email valide" });
    }

    if (!PASSWORD_REGEX.test(password)) {
      return res
        .status(400)
        .json({
          message:
            "Le password doit être compris entre 6 et 13 caractères, doit contenir une lettre minuscule et une majuscule ainsi qu'un chiffre minimum",
        });
    }

    models.User.findOne({
      attributes: ["email"],
      where: { email: email },
    })
      .then(function (userFound) {
        if (!userFound) {
          bcrypt
            .hash(password, 10, function (err, bcryptedPassword) {
              const newUser = models.User.create({
                email: email,
                username: username,
                password: bcryptedPassword,
                bio: bio,
                isAdmin: 0,
              }).then(function (newUser) {
                return res.status(201).json({
                  userId: newUser.id,
                });
              });
            })
            .catch(function (err) {
              return res
                .status(500)
                .json({ message: "Impossible de créer l'utilisateur" });
            });
        } else {
          return res.status(409).json({ message: "L'utilisateur existe déjà" });
        }
      })
      .catch(function (err) {
        return res
          .status(500)
          .json({ message: "Impossible de vérifier l'utilisateur" });
      });
  },
  login: function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    if (email === null || password === null) {
      return res.status(400).json({ message: "Merci de compléter les champs" });
    }
    models.User.findOne({
      where: { email: email },
    })
      .then(function (userFound) {
        if (userFound) {
          bcrypt.compare(
            password,
            userFound.password,
            function (errBcrypt, resBcrypt) {
              if (resBcrypt) {
                return res.status(200).json({
                  userId: userFound.id,
                  token: jwtUtils.generateTokenForUser(userFound),
                });
              } else {
                return res.status(403).json({ message: "Mauvais mot de pass" });
              }
            }
          );
        } else {
          return res.status(404).json({ message: "Utilisateur non trouvé" });
        }
      })
      .catch(function (err) {
        return res
          .status(500)
          .json({ message: "Impossible de vérifier l'utilisateur" });
      });
  },
};
