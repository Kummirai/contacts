import { Router } from "express";
import { getAllContactsController } from "../controllers/contactsController.js";

const contactsRoute = Router();

contactsRoute.get("/", getAllContactsController);

export default contactsRoute;
