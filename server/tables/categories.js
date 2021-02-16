const express = require("express");
const router = express.Router();

const db = require("../config/db");

//insert
router.post("/create", (req, res) => {
    const name = req.body.name;
  
    db.query(
      "INSERT INTO categories (name) VALUES (?)",
      [name],
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
    db.query("SELECT * FROM categories", (err, result) => {
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
    "UPDATE categories set name = ? where id = ?",
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
    db.query("DELETE FROM categories WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
//fin delete

//update
  router.put("/update", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    db.query(
      "UPDATE categories SET name = ? WHERE id = ?",
      [name, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });
//fin update
  
module.exports = router;