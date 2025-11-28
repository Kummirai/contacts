import { Router } from "express";
import {
  getAllContactsController,
  createContactController,
  getContactByIdController,
  deleteContactController,
} from "../controllers/contactsController.js";

const contactsRoute = Router();

contactsRoute.get("/", getAllContactsController);
contactsRoute.post("/", createContactController);
contactsRoute.get("/:id", getContactByIdController);
contactsRoute.delete("/:id", deleteContactController);

export default contactsRoute;
