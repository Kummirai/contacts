import { Router } from "express";
import {
  getAllContactsController,
  createContactController,
} from "../controllers/contactsController.js";

const contactsRoute = Router();

contactsRoute.get("/", getAllContactsController);
contactsRoute.post("/", createContactController);

export default contactsRoute;
