import { Router } from "express";
import {
  getAllContactsController,
  createContactController,
  getContactByIdController,
  deleteContactController,
  updateContactController,
} from "../controllers/contactsController.js";

const contactsRoute = Router();

contactsRoute.get("/", getAllContactsController);
contactsRoute.post("/", createContactController);
contactsRoute.get("/:id", getContactByIdController);
contactsRoute.delete("/:id", deleteContactController);
contactsRoute.put("/:id", updateContactController);

export default contactsRoute;
