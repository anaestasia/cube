const express = require("express");
const router = express.Router();

const db = require("../config/db");

//insert
router.post("/create", (req, res) => {
    const time_ban = req.body.time_ban;
    const fk_user = req.body.fk_user;
    const fk_punishment = req.body.fk_punishment;
    const punisher_id = req.body.punisher_id;
  
    db.query(
      "INSERT INTO punishements_users (time_ban,fk_user,fk_punishment,punisher_id) VALUES (?,?,?,?)",
      [time_ban,fk_user,fk_punishment,punisher_id],
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
    db.query("SELECT * FROM punishements_users", (err, result) => {
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
    db.query("DELETE FROM punishements_users WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
//fin delete
  
module.exports = router;