const express = require("express");
const router = express.Router();

const db = require("../config/db");

//insert
router.post("/create", (req, res) => {
    const fk_ressource = req.body.fk_ressource;
    const fk_user = req.body.fk_user;
  
    db.query(
      "INSERT INTO users_ressources (fk_user,fk_ressource) VALUES (?,?)",
      [fk_user,fk_ressource],
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
    db.query("SELECT * FROM users_ressources", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
//fin get  

function ajoutCategories(result) {
  return new Promise((resolve,reject)=>{
    let f = 0;
    let g = 0;
    for (let num of result) {
      let requeteCategorie = "SELECT * , categories.name as 'categoriename' FROM categories_ressources INNER JOIN categories ON categories.id = categories_ressources.fk_category where fk_ressource = ? ";
      db.query(requeteCategorie, result[f].idRessource, (err, resultCatRess) => 
      {
        if (err) {
          console.log(err);
        }
        else
        {
          lesCategories ="";
          //debut for
          for(let i = 0; i <resultCatRess.length; i++)
          {
            if(i === resultCatRess.length-1)
            {
              lesCategories += resultCatRess[i].categoriename;
            }
            else
            {
              lesCategories += resultCatRess[i].categoriename+', ';
            }
          }
          //fin for
          // console.log(lesCategories)
          // console.log(g);
          result[g].categories = lesCategories
          g++;
        }
        // console.log(lesCategories)
        if(result.length === g)
        {
          resolve();
        }
      });
      f++;
    }
  });
 }

//get mes ressources
router.get("/mesRessources/:id",(req, res) => {
  const id = req.params.id;
  let requete;
  requete = "SELECT *, ressources.id AS 'idRessource', types_ressources.name AS 'nametyperss' ";
  requete += ", relationship_ressources.name AS 'namerelationship' ";
  requete += ", status.name AS 'namestatus'  ";
  requete += "FROM users_ressources ";
  requete += "INNER JOIN ressources ON ressources.id = users_ressources.fk_ressource ";
  requete += "INNER JOIN types_ressources ON types_ressources.id = ressources.fk_type_ressource ";
  requete += "INNER JOIN relationship_ressources ON relationship_ressources.id = ressources.fk_relationship_ressource ";
  requete += "INNER JOIN status ON status.id = ressources.fk_status ";
  requete += "where fk_user = ?"
  requete += " ORDER BY ressources.date_creation DESC";
  db.query(requete,id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.length > 0) {

        (async function() {
          await ajoutCategories(result)
          res.send(result);
       })();
      }
      else
      {
        res.send({ existe: false });
      }
    }
});
});
//fin get mes ressources

//delete
router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM users_ressources WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
//fin delete
  
module.exports = router;