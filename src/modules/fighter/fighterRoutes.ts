import express from "express";
import FighterController from "./fighterController";

const fighterRoutes = express.Router();
const fighterController = new FighterController();

fighterRoutes.use("/fighters", fighterController.createFighter);
fighterRoutes.use("/fighters", fighterController.getFighters);

export default fighterRoutes;
