const express = require("express");
const router = express.Router();

const db = require("../config/db");

//insert
router.post("/create", (req, res) => {
    const content = req.body.content;
    const nb_like = req.body.nb_like;
    const date_creation = req.body.date_creation;
    const date_edition = req.body.date_edition;
    const deleted = req.body.deleted;
    const fk_ressource = req.body.fk_ressource;
    const fk_user = req.body.fk_user;
  
    db.query(
      "INSERT INTO comments (content,nb_like,date_creation,date_edition,deleted,fk_ressource,fk_user) VALUES (?,?,?,?,?,?,?)",
      [content,nb_like,date_creation,date_edition,deleted,fk_ressource,fk_user],
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
    db.query("SELECT * FROM comments", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
//fin get  

//get
router.get("/get/:id", (req, res) => {
  const id = req.params.id;
  
  let requete;
  requete = "SELECT comments.*, users.lastname AS 'nom' ";
  requete += ", users.firstname AS 'prénom' ";
  requete += "FROM comments ";
  requete += "INNER JOIN users ON users.id = comments.fk_user ";
  requete += "where fk_ressource = ? and comments.deleted = 0";
  requete += " ORDER BY comments.date_creation ASC";
  //"SELECT * FROM comments WHERE fk_ressource = ?"
  db.query(requete, id, (err, result) => {
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
    db.query("DELETE FROM comments WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
//fin delete
  
module.exports = router;