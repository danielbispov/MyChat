import { Router } from "express";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import { searchContact } from "../controllers/ContactController.js";

const contactRoutes = Router()

contactRoutes.post("/search", verifyToken, searchContact)

export default contactRoutes