import { Router } from "express";
import {
  signUpUserController,
  logInUserController,
} from "../controllers/authController.js";

const authRoute = Router();

authRoute.post("/signup", signUpUserController);
authRoute.post("/login", logInUserController);

export default authRoute;
