const express = require("express");
const router = express.Router();

const db = require("../config/db");

//insert
router.post("/create", (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const nb_consultation = req.body.nb_consultation;
    const nb_like = req.body.nb_like;
    const approved = req.body.approved;
    const archived = req.body.archived;
    const date_creation = req.body.date_creation;
    const date_edition = req.body.date_edition;
    const deleted = req.body.deleted;
    const fk_type_ressource = req.body.fk_type_ressource;
    const fk_relationship_ressouce = req.body.fk_relationship_ressouce;
    const fk_status = req.body.fk_status;
  
    db.query(
      "INSERT INTO ressources (title,content,nb_consultation,nb_like,approved,archived,date_creation,date_edition,deleted,fk_type_ressource,fk_relationship_ressouce,fk_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
      [title,content,nb_consultation,nb_like,approved,archived,date_creation,date_edition,deleted,fk_type_ressource,fk_relationship_ressouce,fk_status],
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
    db.query("SELECT * FROM ressources", (err, result) => {
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
    db.query("DELETE FROM ressources WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
//fin delete
  
module.exports = router;