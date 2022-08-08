import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import passwordValidator from "password-validator";

export const registerUser = async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  const { username, email } = req.body;
  let test = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,5}[ ]{0,2}$",
    "g"
  );

  let testEmail = test.test(req.body.email);
  // Test de l'email

  let passwordSchema = new passwordValidator();

  passwordSchema
    .is()
    .min(8) // Une longueur minimum de 8 caractères
    .is()
    .max(25) // Une longueur maximum de 25 caractères
    .has()
    .uppercase() // Doit avoir des lettres majuscules
    .has()
    .lowercase() // Doit avoir des lettres minuscules
    .has()
    .digits(2) // Doit avoir au moins 2 chiffres
    .has()
    .not()
    .spaces(); // Ne doit pas comporter d'espaces

  let testPassword = passwordSchema.validate(req.body.password);
  const emailCryptoJs = CryptoJS.HmacSHA256(
    email,
    `${process.env.CRYPTOJS_EMAIL_KEY}`
  ).toString();
  req.body.email = emailCryptoJs;
  req.body.password = hashedPass;
  const newUser = new UserModel(req.body);

  try {
    const oldUserUsername = await UserModel.findOne({ username });
    const oldUserEmail = await UserModel.findOne({ email: emailCryptoJs });

    if (oldUserUsername) {
      return res.status(400).json(" > Username is alredy registered < ");
    }
    if (oldUserEmail) {
      return res.status(400).json(" > Email is alredy registered < ");
    }
    if (!testEmail) {
      return res.status(403).json("Enter a valid email. ex : contact@mail.com");
    }

    if (!testPassword) {
      return res
        .status(403)
        .json(
          "Please use a more secure password: between 8 and 25 characters, one capital letter and at least two digits."
        );
    }

    const user = await newUser.save();
    const token = jwt.sign(
      { username: user.username, id: user._id },
      process.env.SECRET_TOKEN,
      { expiresIn: "12h" }
    );
    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json(" > Thanks to fill the different fields < ");
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const emailCryptoJs = CryptoJS.HmacSHA256(
      email,
      `${process.env.CRYPTOJS_EMAIL_KEY}`
    ).toString();
    const user = await UserModel.findOne({ email: emailCryptoJs });

    if (user) {
      const validity = await bcrypt.compare(password, user.password);
      if (!validity) {
        res.status(400).json(" > Wrong Password < ");
      } else {
        const token = jwt.sign(
          { username: user.username, id: user._id },
          process.env.SECRET_TOKEN,
          { expiresIn: "12h" }
        );
        res.status(200).json({ user, token });
      }
    } else {
      res.status(404).json(" > User does not exists < ");
    }
  } catch (err) {
    res.status(500).json(" > Cannot Login < ");
  }
};
