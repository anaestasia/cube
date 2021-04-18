const express = require("express");
const router = express.Router();

const db = require("../config/db");

//insert
router.post("/create", (req, res) => {
    const label = req.body.label;
  
    db.query(
      "INSERT INTO reasons (label) VALUES (?)",
      [label],
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
    db.query("SELECT id as 'value', label FROM reasons", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
//fin get  

//update
router.post("/update", (req, res) => {
  const name = req.body.name;
  const id = req.body.id;

  db.query(
    "UPDATE reasons set label = ? where id = ?",
    [name,id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Valeur modifié !");
      }
    }
  );
});
//fin update

//delete
router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM reasons WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
//fin delete
  
module.exports = router;