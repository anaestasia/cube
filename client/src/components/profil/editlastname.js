import React, { useState } from "react";
import Axios from "axios";

export default function EditLastName() {
 
    const [nom, setNom] = useState("");

    const [idUser, setIdUser] = useState("");

    const [informationNom, setInformationNom] = useState("");
    
    Axios.defaults.withCredentials = true;
  
    Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/login").then((response) => {
        if (response.data.loggedIn === true) {
            setIdUser(response.data.user[0].id)
        }
      });

    function validerChangement(event)
    {
        event.preventDefault();
        const champ = 'lastname';
        Axios.post(process.env.REACT_APP_SITE_URL_API+"/users/edit", {
            id: idUser,
            valeur: nom,
            champ: champ,
          }).then((response) => {
              if(response.data.verif)
              {
                setInformationNom('Ton prénom a bien été changé')
                document.getElementById("lastName").value = '';
              }
        });
    }

    return (
        <div >
            <form onSubmit={validerChangement}>
                <label>Nom :</label><br />
                <input id='lastName' className="pass-input" type="text" onChange={(e) => { setNom(e.target.value) }} /><br /><br />

                <button id="btnModifier"> Modifier </button>
          </form>  
          {informationNom}
  
        </div>
      );
    }