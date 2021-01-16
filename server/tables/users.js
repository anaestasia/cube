const express = require("express");
const router = express.Router();

const db = require("../config/db");

//insert
router.post("/create", (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const mail = req.body.mail;
    const password = req.body.password;
    const token = req.body.token;
    const street_nb = req.body.street_nb;
    const street_name = req.body.street_name;
    const city = req.body.city;
    const postal_code = req.body.postal_code;
    const country = req.body.country;
    const date_creation = req.body.date_creation;
    const last_connexion = req.body.last_connexion;
    const checked = req.body.checked;
    const deleted = req.body.deleted;
    const fk_role = req.body.fk_role;
  
    db.query(
      "INSERT INTO users (firstname,lastname,mail,password,token,street_nb,street_name,city,postal_code,country,date_creation,last_connexion,checked,deleted,fk_role) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [firstname,lastname,mail,password,token,street_nb,street_name,city,postal_code,country,date_creation,last_connexion,checked,deleted,fk_role],
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
    db.query("SELECT * FROM users", (err, result) => {
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
    db.query("DELETE FROM users WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
//fin delete
  
module.exports = router;