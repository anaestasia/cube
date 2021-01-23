const express = require("express");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");


const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "l720UhCXMkyT0rxMO8mM",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expire: 1800000, // 3600000 milliseconde = 1h
    },
  })
);

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
app.post("/create", (req, res) => {
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
app.get("/get", (req, res) => {
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
app.delete("/delete/:id", (req, res) => {
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
app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const mail = req.body.mail;
  const password = req.body.password;

  // console.log(mail);
  // console.log(password);

  db.query("SELECT * FROM users where mail = ?", mail, (err, result) => {
    
    if (err) {
      console.log(err);
    } else {
       //console.log(result);
       if (result.length > 0) {
        if(password === result[0].password)
        {
          req.session.user = result;
          console.log('même mdp');
          console.log(req.session.user);
          res.send({ connecte: true, result });
        }
        else
        {
          console.log('mdp différent');
          res.send({ connecte: false,message: "Mauvais MDP" });
        }
       }
       else{
          console.log('utilisateur inconnu');
          res.send({ connecte: false,message: "Mauvais MDP" });
       }
    }
  });
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    res.send({ destroy: true });
 })
});

app.post("/token", (req, res) => {
  const token = req.body.token;
  console.log(token);

  db.query("SELECT * FROM users where token = ? and checked = 0", token, (err, result) => {
    if (err) 
    {
      console.log(err);
    } 
    else {
       //console.log(result);
       if (result.length > 0) {
        if(token === result[0].token)
        {
          console.log('okey go update');
          db.query("UPDATE users SET checked = 1 , fk_role = 2 WHERE token = ?", token, (err, result) => 
          {
            if (err) 
            {
              console.log(err);
              res.send({ token: false });
            } else 
            {
              res.send({ token: true });
            }
          });
        }
       }
       else
       {
          console.log('liens erronée');
          res.send({ token: false });
       }
    }
  });
});

app.post("/editPassword", (req, res) => {
  const password = req.body.password;
  const id = req.body.id;

  db.query("UPDATE users SET password = ? WHERE id = ?", [password,id],  (err, result) => {
    if (err) 
    {
      console.log(err);
    } 
    else {
      res.send({ verif: true });
      console.log('MdpChangé')
    }
  });
});
module.exports = app;