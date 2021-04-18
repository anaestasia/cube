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

//get non traiter
router.get("/getNonTreated", (req, res) => {
    db.query("SELECT reports.id, fk_user, fk_comment, fk_reason FROM reports INNER JOIN users ON users.id = reports.fk_user WHERE treated = 0", (err, result) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    });
});
//fin get non traiter

//valid report
router.post("/valid/:id", (req, res) => 
{
    const id = req.params.id;
    const reason = req.body.reason;

    db.query("UPDATE reports SET treated = 1, fk_reason = ? WHERE id = ?", [reason, id], (err, result) => 
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(reason);
            res.send(result);
        }
    })
});

//fin valid report
  
module.exports = router;