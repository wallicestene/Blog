import mongoose from "mongoose";
import User from "../models/userModel.js";
// login user
const userLogin = (req, res) => {
  const { email, password } = req.body;
  User.logIn(email, password)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(500).json({error: error.message});
    });
};
// signUp user
const userSignUp = (req, res) => {
  const { username, email, password } = req.body;
  User.signUp(username, email, password)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(500).json({error: error.message});
    });
};
export {
    userLogin, userSignUp
}
