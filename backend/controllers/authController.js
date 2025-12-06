import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";

//log in controller
const logInUserController = async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }

    if (!user) {
      return res.status(401).json({
        success: false,
        message: info.message || "Authentication failed",
      });
    }

    // Log the user in
    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Login error",
        });
      }

      return res.status(200).json({
        success: true,
        message: "User logged in successfully",
        data: user,
      });
    });
  })(req, res, next);
};

const getSessionController = async (req, res) => {
  console.log(req.user);
  try {
    const sessionStatus = await req.isAuthenticated();
    if (sessionStatus) {
      return res.status(200).json({ success: true, user: req.user });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "User not logged in!" });
    }
  } catch (error) {
    console.error(`Error in getSessionController: ${error.message}`);
    return res.status(500).json("Internal Server Error");
  }
};

const isAuthenticated = (req, res, next) => {
  // Check if user is authenticated
  if (req.isAuthenticated()) {
    console.log(`User is authenticated!`);
    return next(); // User is authenticated, proceed to route
  }

  console.log(`User not authenticated!`);
  // User is not authenticated
  return res.status(401).json({
    success: false,
    message: "Please log in first!",
    authenticated: false,
  });
};

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

passport.use(
  new Strategy({ usernameField: "email" }, async (username, password, done) => {
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(username)) {
        return done(null, false, { message: "Invalid email format" });
      }

      const user = await User.findOne({ email: username }).select("+password");
      if (!user) {
        return done(null, false, { message: "Email not found!" });
      }

      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          console.log(`Error in bcrypt compare: ${err}`);
          return done(err);
        }

        if (result) {
          return done(null, {
            username: user.username,
            email: user.email,
            contacts: user.contacts,
            id: user._id.toString(),
          });
        } else {
          return done(null, false, { message: "Invalid password!" });
        }
      });
    } catch (error) {
      console.error("Error in passport strategy:", error);
      return done(error);
    }
  }),
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export {
  signUpUserController,
  logInUserController,
  getSessionController,
  isAuthenticated,
};
