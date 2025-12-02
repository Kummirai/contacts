import User from "../models/userModel.js";
import bcrypt from "bcrypt";

const logInUserController = async (req, res) => {};

const signUpUserController = async (req, res) => {
  const { username, email, password } = req.body;

  const checkUsername = await User.findOne({ username });
  if (checkUsername) {
    res
      .status(400)
      .json({ success: false, message: "User name already taken!" });
  }
  ``;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  const isEmailRegistered = await User.findOne({ email });
  if (isEmailRegistered) {
    res
      .status(400)
      .json({ success: false, message: "Email is already registered!" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User successfully created!",
      data: {
        username: newUser.username,
        email: newUser.email,
        contacts: newUser.contacts,
      },
    });
  } catch (error) {
    console.error(`Error in signUpUserController: ${error}`);
    res.status(500).json("Internal server error");
  }
};

export { signUpUserController, logInUserController };
