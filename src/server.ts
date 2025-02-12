const http = require("http");
require("dotenv").config();
import { connectToDatabase } from "./config/database/database";

// There is no instance of express in this server file because we instantiate it in the other file.
const app = require("./app");
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

async function connectToMongoDB() {
  try {
    await connectToDatabase();
  } catch (error) {
    console.error("Could not connect to MongoDB", error);
  }
}

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
  connectToMongoDB();
});
