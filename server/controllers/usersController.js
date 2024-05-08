import mongoose from "mongoose";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

//function for creating a token for the user
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "10d" });
};

// login user
const userLogin = (req, res) => {
  const { email, password } = req.body;
  User.logIn(email, password)
    .then((user) => {
      const token = createToken(user._id);
      const userDetails = {
        username: user.username,
        profile: user.profile,
        email,
        id: user._id,
      };
      res.status(200).json({ ...userDetails, token });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// signUp user
const userSignUp = (req, res) => {
  const { username, profile, email, password } = req.body;
  User.signUp(username, profile, email, password)
    .then((user) => {
      const token = createToken(user._id);
      const userDetails = {
        username,
        profile,
        email,
        id: user._id,
      };
      res.status(200).json({ ...userDetails, token });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};
export { userLogin, userSignUp };
