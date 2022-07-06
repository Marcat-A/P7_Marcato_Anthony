const express = require("express");
const bodyParser = require("body-parser");
const apiRouter = require("./apiRouter").router;

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get("/", function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send("Yes");
});

server.use("/SocialMedia/", apiRouter);

server.listen(8080, function () {
  console.log("Server listening");
});
