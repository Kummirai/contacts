import User from "../models/userModel.js";
import bcrypt from "bcrypt";

//log in controller
const logInUserController = async (req, res) => {
  const { email, password } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  const checkEmail = await User.findOne({ email }).select("+password");
  if (!checkEmail) {
    res.status(400).json({ success: false, message: "Email not found!" });
  }

  bcrypt.compare(password, checkEmail.password, (err, result) => {
    if (err) {
      console.log(`Error in loginController: ${err}`);
      res.status(500).json("Internal server error");
    }
    if (result) {
      res.status(200).json({
        success: true,
        message: "User logged in successfully!",
        data: {
          username: checkEmail.username,
          email: checkEmail.email,
          contacts: checkEmail.contacts,
          id: checkEmail._id,
        },
      });
    } else {
      res.status(400).json({ success: false, message: "Invalid Password!" });
    }
  });
};

//Sign up controller
const signUpUserController = async (req, res) => {
  const { username, email, password } = req.body;

  const checkUsername = await User.findOne({ username });
  if (checkUsername) {
    res
      .status(400)
      .json({ success: false, message: "Username already taken!" });
  }

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
      message: "Your account has been successfully created!",
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
