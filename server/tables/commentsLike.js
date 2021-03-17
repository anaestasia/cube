const express = require("express");
const router = express.Router();

const db = require("../config/db");

const getNbLike = (id, res) => 
{
    db.query(
        "SELECT COUNT(*) as nbLike FROM comments_like WHERE fk_comments = ?",
        id,
        (err, result) => 
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    });
};

//insert
router.post("/create", (req, res) => {
  const fk_ressource = req.body.ressource;
  const fk_user = req.body.user;

  //console.log('id ressource: ' + fk_ressource + " id user: " + fk_user);

  db.query(
    "SELECT * FROM comments_like WHERE fk_user = ? AND fk_ressource = ?", 
    [fk_user, fk_ressource],
    (err, result) => 
    {
      if(err)
      {
        console.log(err);
      }
      else
      {
        console.log(result);
        if(result.length !== 0)
        {
            db.query("DELETE FROM comments_like WHERE fk_user = ? AND fk_ressource = ?", 
            [fk_user, fk_ressource], 
            (err, result) => {
                if (err) 
                {
                    console.log(err);
                } 
                else 
                {
                    getNbLike(fk_ressource, res);
                }
            });
        }
        else
        {
          db.query(
            "INSERT INTO comments_like (fk_user,fk_ressource) VALUES (?,?)",
            [fk_user,fk_ressource],
            (err, result) => {
                if (err) 
                {
                    console.log(err);
                } 
                else 
                {
                    getNbLike(fk_ressource, res);
                }
            }
          );
        }
      }
    }
  );
});
//fin insert

//get nbLike
router.post("/get/nbLike", (req, res) => 
{
    const fk_ressource = req.body.ressource;
    getNbLike(fk_ressource, res);
});
//fin getNbLike

//get
router.get("/get", (req, res) => {
  db.query("SELECT * FROM comments_like", (err, result) => {
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
  db.query("DELETE FROM comments_like WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//fin delete

module.exports = router;