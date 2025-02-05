import express from "express";

console.log(express);

const server = express();

server.use(express.static("dist"));

server.set("view engine", "ejs");

// server.use("/", (req, res) => {
//   res.render("index", {
//     content: "EJS is cool.",
//   });
// });

server.use("/", (req, res) => {
  res.send("Hello Express");
});

server.listen(8080, "0.0.0.0", () => {
  console.info("Express server is listening at http://0.0.0.0:8080");
});
