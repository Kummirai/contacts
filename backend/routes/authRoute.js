import { Router } from "express";
import {
  signUpUserController,
  logInUserController,
  getSessionController,
} from "../controllers/authController.js";

const authRoute = Router();

authRoute.get("/session", getSessionController);
authRoute.post("/signup", signUpUserController);
authRoute.post("/login", logInUserController);

export default authRoute;
