import express from "express";
import UserController from "./userController";

const userRoutes = express.Router();
const userController = new UserController();

userRoutes.post("/users", userController.createUser);
userRoutes.get("/users", userController.getUsers);

export default userRoutes;
