import express from "express";
import userRoutes from "./modules/user/userRoutes";
import fighterRoutes from "./modules/fighter/fighterRoutes";

/**
 *  This app.js file will contain the instance of express.
 */

const app = express();
const cors = require("cors");

// Middleware - functions that are run with every single request.
app.use(express.json()); // Parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: false })); // Turns form data like name=John&age=30 into { name: 'John', age: '30' }
app.use(cors()); // Allows browsers to create requests to your API which would otherwise would be blocked from the same origin policy

app.use("/api", userRoutes);
app.use("/api", fighterRoutes);

app.use("/", (req, res) => {
  res.send(
    "This is a catch all request so make sure to register the routes prior to this"
  );
});

module.exports = app;
