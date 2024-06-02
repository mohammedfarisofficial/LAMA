// model
import User from "../models/User.js";
// bcrypt
import bcrypt from "bcrypt";

const registerLoginUser = async (req, res) => {
  const { email, name } = req.body;
  try {
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      console.log("User exist!");
      res.status(200).json(isUserExist);
    }
    // create user
    if (!isUserExist) {
      const newUser = new User({
        email,
        name,
      });

      const newUserCreated = await newUser.save();

      if (newUserCreated) {
        console.log("New user created!");
        res.status(201).json(newUserCreated);
      } else {
        res.status(401).json("Something went wrong!");
      }
    }
  } catch (error) {
    res.status(401).json(error.message);
  }
};

export { registerLoginUser };
