import express from "express";
import UserController from "./userController";

const userRoutes = express.Router();
const userController = new UserController();

// Make sure to use post and get instead of use
// Use is for Middleware only
userRoutes.post("/users", userController.createUser);
userRoutes.get("/users", userController.getUsers);
userRoutes.delete("/users", userController.deleteUsers);
userRoutes.patch("/users", userController.addFighterToUser);

// Login
userRoutes.post("/login", userController.)

export default userRoutes;
