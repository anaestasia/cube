import React, { useState } from "react";
import Axios from "axios";

export default function EditStreetName() {
 
    const [streetName, setstreetName] = useState("");

    const [idUser, setIdUser] = useState("");

    const [informationstreetName, setInformationstreetName] = useState("");
    
    Axios.defaults.withCredentials = true;
  
    Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/login").then((response) => {
        if (response.data.loggedIn === true) {
            setIdUser(response.data.user[0].id)
        }
      });

    function validerChangement(event)
    {
        event.preventDefault();
        const champ = 'street_name';
        Axios.post(process.env.REACT_APP_SITE_URL_API+"/users/edit", {
            id: idUser,
            valeur: streetName,
            champ: champ,
          }).then((response) => {
              if(response.data.verif)
              {
                setInformationstreetName('Ton nom de rue a bien été changé')
                document.getElementById("street_name").value = '';
              }
        });
    }

    return (
        <div className="profile-field">
            <form onSubmit={validerChangement}>
                <label>Nom de rue :</label><br />
                <input id='street_name' className="pass-input" type="text" onChange={(e) => { setstreetName(e.target.value) }} />
                <button id="btnModifier"><i class="far fa-save"></i></button>
          </form>  
          {informationstreetName}
  
        </div>
      );
    }