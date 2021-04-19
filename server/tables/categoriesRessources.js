const express = require("express");
const router = express.Router();

const db = require("../config/db");

//insert
router.post("/create", (req, res) => {
    const fk_ressource = req.body.fk_ressource;
    const fk_categorie = req.body.fk_categorie;
  
    db.query(
      "INSERT INTO categories_ressources (fk_ressource,fk_categorie) VALUES (?,?)",
      [fk_ressource,fk_categorie],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Valeur insérée !");
        }
      }
    );
  });
  router.post("/create2", (req, res) => {
    const fk_categorie = req.body.fk_categorie;
    const date_creation = req.body.date_creation;
    db.query(
      "INSERT INTO categories_ressources (fk_ressource,fk_category) VALUES ((SELECT id FROM ressources WHERE date_creation = ?),?)",
      [date_creation,fk_categorie],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Valeur insérée !");
        }
      }
    );
  });
//fin insert

//get
  router.get("/get", (req, res) => {
    db.query("SELECT * FROM categories_ressources", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
//fin get  

//delete
router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM categories_ressources WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
//fin delete
  
module.exports = router;