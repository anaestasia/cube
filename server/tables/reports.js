const express = require("express");
const router = express.Router();

const db = require("../config/db");

//insert
router.post("/create", (req, res) => {
    const content = req.body.content;
    const treated = req.body.treated;
    const fk_user = req.body.fk_user;
    const fk_comment = req.body.fk_comment;
    const fk_reason = req.body.fk_reason;
  
    db.query(
      "INSERT INTO reports (content,treated,fk_user,fk_comment,fk_reason) VALUES (?,?,?,?,?)",
      [content,treated,fk_user,fk_comment,fk_reason],
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
    db.query("SELECT * FROM reports", (err, result) => {
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
    db.query("DELETE FROM reports WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
//fin delete
  
module.exports = router;