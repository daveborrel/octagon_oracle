import express from "express";
import userRoutes from "./modules/user/userRoutes";

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
module.exports = app;
