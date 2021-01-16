const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const userRoute = require("./tables/user");
app.use("", userRoute);

app.listen(3001, () => {
  console.log("Le serveur est lancé sur le port 3001");
});
