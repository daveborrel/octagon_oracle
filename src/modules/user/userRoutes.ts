import express from "express";
import UserController from "./userController";

const router = express.Router();
const userController = new UserController();

router.post("/users", userController.createUser);
router.get("/users", userController.getUsers);

export default router;
