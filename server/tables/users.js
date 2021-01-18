const express = require("express");
const router = express.Router();

const db = require("../config/db");

function strRandom(o) {
  var a = 10,
      b = 'abcdefghijklmnopqrstuvwxyz',
      c = '',
      d = 0,
      e = ''+b;
  if (o) {
    if (o.startsWithLowerCase) {
      c = b[Math.floor(Math.random() * b.length)];
      d = 1;
    }
    if (o.length) {
      a = o.length;
    }
    if (o.includeUpperCase) {
      e += b.toUpperCase();
    }
    if (o.includeNumbers) {
      e += '1234567890';
    }
  }
  for (; d < a; d++) {
    c += e[Math.floor(Math.random() * e.length)];
  }
  return c;
}

//insert
router.post("/create", (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const mail = req.body.mail;
    const password = req.body.password;
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
    const token = strRandom({
      includeUpperCase: true,
      includeNumbers: true,
      length: 20,
      startsWithLowerCase: true
    });

    db.query("SELECT * FROM users where mail = ?", mail, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result.length == 0) 
        {
          db.query(
            "INSERT INTO users (firstname,lastname,mail,password,token,street_nb,street_name,city,postal_code,country,date_creation,last_connexion,checked,deleted,fk_role) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [firstname,lastname,mail,password,token,street_nb,street_name,city,postal_code,country,date_creation,last_connexion,checked,deleted,fk_role],
            (errr, resultt) => {
              if (errr) {
                console.log(errr);
              } else {
                res.send({message : "Vous etes inscript, verifier votre email !"});
              }
            }
          );
          //res.send({message : "Se mail n'existe déjà !"});
        }
        else
        {
          res.send({message : "Se mail existe déjà !"});
        }
      }
    });

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
  

router.post("/login", (req, res) => {
  const mail = req.body.mail;
  const password = req.body.password;

  console.log(mail);
  console.log(password);

  db.query("SELECT * FROM users where mail = ?", mail, (err, result) => {
    
    if (err) {
      console.log(err);
    } else {
      res.send('test');
      console.log(result);
      // if(password == result[0].password)
      // {
         res.send({ message: "Mot de passe Ok" });
      // }
      // else
      // {
      //   res.send({ message: "Mauvais MDP" });
      // }
    }
  });
});

module.exports = router;