import express from "express";
import userRoutes from "./modules/user/userRoutes";
import fighterRoutes from "./modules/fighter/fighterRoutes";

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", userRoutes);
app.use("/api", fighterRoutes);

app.use("/", (req, res) => {
  res.send(
    "This is a catch all request so make sure to register the routes prior to this"
  );
});

module.exports = app;
