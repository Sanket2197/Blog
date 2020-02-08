const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("API /");
});

app.get("/get-users", (req, res) => {
  res.send("GET USERS");
});

app.get("/get-blogs", (req, res) => {
  res.send("GET BLOGS");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));
