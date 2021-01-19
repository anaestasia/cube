const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());


const categoriesRoute = require("./tables/categories");
app.use("/categories", categoriesRoute);

const categoriesRessourcesRoute = require("./tables/categoriesRessources");
app.use("/categoriesRessources", categoriesRessourcesRoute);

const commentsRoute = require("./tables/comments");
app.use("/comments", commentsRoute);

const documentsRoute = require("./tables/documents");
app.use("/documents", documentsRoute);

const documentsRessourcesRoute = require("./tables/documentsRessources");
app.use("/documentsRessources", documentsRessourcesRoute);

const logsRoute = require("./tables/logs");
app.use("/logs", logsRoute);

const punishementsRoute = require("./tables/punishements");
app.use("/punishements", punishementsRoute);

const punishementsUsersRoute = require("./tables/punishementsUsers");
app.use("/punishementsUsers", punishementsUsersRoute);

const reasonsRoute = require("./tables/reasons");
app.use("/reasons", reasonsRoute);

const relationshipRessourcesRoute = require("./tables/relationshipRessources");
app.use("/relationshipRessources", relationshipRessourcesRoute);

const reportsRoute = require("./tables/reports");
app.use("/reports", reportsRoute);

const ressourcesRoute = require("./tables/ressources");
app.use("/ressources", ressourcesRoute);

const rolesRoute = require("./tables/roles");
app.use("/roles", rolesRoute);

const statusRoute = require("./tables/status");
app.use("/status", statusRoute);

const typesRessourcesRoute = require("./tables/typesRessources");
app.use("/typesRessources", typesRessourcesRoute);

const usersRoute = require("./tables/users");
app.use("/users", usersRoute);

const usersRessourcesRoute = require("./tables/usersRessources");
app.use("/usersRessources", usersRessourcesRoute);


app.listen(3001, () => {
  console.log("Le serveur est lancé sur le port 3001");
});
