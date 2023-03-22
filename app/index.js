var express = require("express");
var app = express();
var cors = require("cors");

//used to serve static files from public folder
app.use(express.static("public"));
app.use(cors());

// create a user account
/*When a get request coming from the client is received, the server will respond with a JSON object containing the name, email, and password parameters. The parameters are passed in the URL as part of the request. The parameters are accessed using the req.params object.*/
app.get("/account/create/:name/:email/:password", function (req, res) {
  res.send({
    name: req.params.name,
    email: req.params.email,
    password: req.params.password,
  });
});

// login to user account
app.get("/account/login/:email/:password", function (req, res) {
  res.send({
    email: req.params.email,
    password: req.params.password,
  });
});

// all accounts
app.get("/account/all", function (req, res) {
  res.send({
    name: "peter",
    email: "peter@mit.edu",
    password: "secret",
  });
});

var port = 3000;
app.listen(port);
console.log("Server running on port " + port);
