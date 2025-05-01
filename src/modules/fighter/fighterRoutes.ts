import express from "express";
import FighterController from "./fighterController";
import { authenticateToken } from "../../middleware/auth";

const fighterRoutes = express.Router();
const fighterController = new FighterController();

// In order to protect these routes
fighterRoutes.use(authenticateToken);

// Make sure to use post and get instead of use
// Use is for Middleware only
fighterRoutes.post("/fighters", fighterController.createFighter);
fighterRoutes.get("/fighters", fighterController.getListOfFighters);
fighterRoutes.delete("/fighters", fighterController.deleteFighters);

export default fighterRoutes;
