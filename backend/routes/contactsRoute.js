import { Router } from "express";
import {
  getAllContactsController,
  createContactController,
  getContactByIdController,
} from "../controllers/contactsController.js";

const contactsRoute = Router();

contactsRoute.get("/", getAllContactsController);
contactsRoute.post("/", createContactController);
contactsRoute.get("/:id", getContactByIdController);

export default contactsRoute;
