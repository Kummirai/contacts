import { Router } from "express";
import {
  getAllCategoriesController,
  getCategoryController,
} from "../controllers/categoriesController.js";

const categoryRoute = Router();

categoryRoute.get("/", getAllCategoriesController);
categoryRoute.get("/:category", getCategoryController);

export default categoryRoute;
