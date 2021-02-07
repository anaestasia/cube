const express = require("express");
const app = express();

const db = require("../config/db");

//insert
app.post("/create", (req, res) => {
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
    const fk_relationship_ressource = req.body.fk_relationship_ressource;
    const fk_status = req.body.fk_status;
    const idUser = req.body.idUser;
    
    db.query(
      "INSERT INTO ressources (title,content,nb_consultation,nb_like,approved,archived,date_creation,date_edition,deleted,fk_type_ressource,fk_relationship_ressource,fk_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
      [title,content,nb_consultation,nb_like,approved,archived,date_creation,date_edition,deleted,fk_type_ressource,fk_relationship_ressource,fk_status],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          db.query(
            "INSERT into users_ressources (fk_user,fk_ressource) VALUES (?, (SELECT id FROM ressources WHERE date_creation = ?))",
            [idUser,date_creation],
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                res.send("Valeur insérée !");
              }
            }
          );
        }
      }
    );
  });
//fin insert

//get
  app.get("/get", (req, res) => {
    db.query("SELECT * FROM ressources", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  
  function ajoutUser(result) {
    return new Promise((resolve,reject)=>{
      let i = 0;
      let f = 0;
      for (let num of result) {
        let requeteUser = "SELECT * FROM users where id = ? ";
        db.query(requeteUser, result[f].fk_user, (err, resultUser) => 
        {
          if (err) {
            console.log(err);
          }
          else
          {
            // console.log(h);
            result[i].user = resultUser[0].lastname + " "+ resultUser[0].firstname;
            // console.log(result)
            // console.log(resultUser);
            // console.log(resultUser[0].fk_user);
            i++;
          }
          // console.log(resultRess)
          if(result.length === i)
          {
            resolve();
          }
        });
        f++;
      }
    });
   }

  function ajoutIdUser(result) {
    return new Promise((resolve,reject)=>{
    let f = 0;
    let h = 0;
      for (let num of result) {
        let requeteUser = "SELECT * FROM users_ressources where fk_ressource = ? ";
        db.query(requeteUser, result[f].idRessource, (err, resultRes) => 
        {
          if (err) {
            console.log(err);
          }
          else
          {
            // console.log(h);
            result[h].fk_user = resultRes[0].fk_user;
             console.log(result[h].idRessource)
             console.log(resultRes);
             console.log(resultRes[0].fk_user);
            h++;
          }
          // console.log(resultRess)
          if(result.length === h)
          {
            resolve();
          }
        });
        f++;
      }
    });
   }
  
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

  app.get("/getNonAp",(req, res) => {
    
    let requete;
    requete = "SELECT *, ressources.id AS 'idRessource', types_ressources.name AS 'nametyperss' ";
    requete += ", relationship_ressources.name AS 'namerelationship' ";
    requete += ", status.name AS 'namestatus'  ";
    requete += "FROM ressources ";
    requete += "INNER JOIN types_ressources ON types_ressources.id = ressources.fk_type_ressource ";
    requete += "INNER JOIN relationship_ressources ON relationship_ressources.id = ressources.fk_relationship_ressource ";
    requete += "INNER JOIN status ON status.id = ressources.fk_status ";
    requete += "where deleted = 0 and approved = 0";
    db.query(requete, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result.length > 0) {

          (async function() {
            await ajoutCategories(result)
            await ajoutIdUser(result)
            await ajoutUser(result)
            res.send(result);

         })();
        }
        else
        {
          res.send({ existe: false });
        }
      }
  });
});//fin get  

//get 1 ressource
app.post("/getid", (req, res) => {
  const id = req.body.id;
  let lesCategories = "";

  let requete;
  requete = "SELECT *, types_ressources.name AS 'nametyperss' ";
  requete += ", relationship_ressources.name AS 'namerelationship' ";
  requete += ", status.name AS 'namestatus'  ";
  requete += "FROM ressources ";
  requete += "INNER JOIN types_ressources ON types_ressources.id = ressources.fk_type_ressource ";
  requete += "INNER JOIN relationship_ressources ON relationship_ressources.id = ressources.fk_relationship_ressource ";
  requete += "INNER JOIN status ON status.id = ressources.fk_status ";
  requete += "where ressources.id = ? and deleted = 0 and approved = 1";
  //console.log(requete);
  db.query(requete, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
       if (result.length > 0) {
          db.query("SELECT * , categories.name as 'categoriename' FROM categories_ressources INNER JOIN categories ON categories.id = categories_ressources.fk_category where fk_ressource = ? ", id, (err, resultCatRess) => {
            if (err) {
              console.log(err);
            } else {
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
              
              db.query("select * FROM users_ressources INNER JOIN users ON users.id = users_ressources.fk_user  WHERE users_ressources.fk_ressource = ?", id, (err, user) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log(user)
                  res.send({ result, lesCategories, user, existe: true });

                }
              });

            }
          });
          
          //console.log(result);
        }
        else
        {
          res.send({ existe: false });
        }
      }
  });
});
//fin get  

//update
app.post("/editRessource", (req, res) => {
  const content = req.body.content;
  const id = req.body.id;
  const date_edition = req.body.date_edition;
  db.query("UPDATE ressources SET content = ?, date_edition = ? WHERE id = ?", [content,date_edition,id],  (err, result) => {
    if (err) 
    {
      console.log(err);
    } 
    else {
      res.send({ verif: true });
      console.log('ressource '+id+" changé");
    }
  });
});


app.post("/addVue", (req, res) => {
  const nb_consultation = req.body.nb_consultation;
  const id = req.body.id;
  db.query("UPDATE ressources SET nb_consultation = ? WHERE id = ?", [nb_consultation,id],  (err, result) => {
    if (err) 
    {
      console.log(err);
    } 
    else {
      res.send({ verif: true });
      console.log('nombre de vue :'+nb_consultation);
    }
  });
});

app.post("/ressourceApprouved", (req, res) => {
  const id = req.body.id;
  console.log(id);
  db.query("UPDATE ressources SET approved = true WHERE id = ?", id,  (err, result) => {
    if (err) 
    {
      console.log(err);
    } 
  });
});

app.post("/ressourceDeleted", (req, res) => {
  const id = req.body.id;
  db.query("UPDATE ressources SET deleted = true WHERE id = ?", id,  (err, result) => {
    if (err) 
    {
      console.log(err);
    } 
  });
});
//fin update

//delete
app.delete("/delete/:id", (req, res) => {
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
  
module.exports = app;