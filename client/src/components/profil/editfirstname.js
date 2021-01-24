import React, { useState } from "react";
import Axios from "axios";

export default function EditFirstname() {
 
    const [prenom, setPrenom] = useState("");

    const [idUser, setIdUser] = useState("");

    const [informationPrenom, setInformationPrenom] = useState("");
    
    Axios.defaults.withCredentials = true;
  
    Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/login").then((response) => {
        if (response.data.loggedIn === true) {
            setIdUser(response.data.user[0].id)
        }
      });

    function validerChangement(event)
    {
        event.preventDefault();
        const champ = 'firstname';
        Axios.post(process.env.REACT_APP_SITE_URL_API+"/users/edit", {
            id: idUser,
            valeur: prenom,
            champ: champ,
          }).then((response) => {
              if(response.data.verif)
              {
                setInformationPrenom('Ton prénom a bien été changé')
                document.getElementById("firstName").value = '';
              }
        });
    }

    return (
        <div >
            <form onSubmit={validerChangement}>
                <label>Prénom :</label><br />
                <input id='firstName' className="pass-input" type="text" onChange={(e) => { setPrenom(e.target.value) }} /><br /><br />

                <button id="btnModifier"> Modifier </button>
          </form>  
          {informationPrenom}
  
        </div>
      );
    }