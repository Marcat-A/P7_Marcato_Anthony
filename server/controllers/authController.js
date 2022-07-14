import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";

export const registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  const { username, email } = req.body;
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
    const user = await newUser.save();
    const token = jwt.sign(
      { username: user.username, id: user._id },
      process.env.SECRET_TOKEN,
      { expiresIn: "1h" }
    );
    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
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
          { expiresIn: "1h" }
        );
        res.status(200).json({ user, token });
      }
    } else {
      res.status(404).json(" > User does not exists < ");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
