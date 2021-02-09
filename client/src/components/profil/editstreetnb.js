import React, { useState } from "react";
import Axios from "axios";

export default function EditStreetNB() {
 
    const [streetNb, setstreetNb] = useState("");

    const [idUser, setIdUser] = useState("");

    const [informationstreetNb, setInformationstreetNb] = useState("");
    
    Axios.defaults.withCredentials = true;
  
    Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/login").then((response) => {
        if (response.data.loggedIn === true) {
            setIdUser(response.data.user[0].id)
        }
      });

    function validerChangement(event)
    {
        event.preventDefault();
        const champ = 'street_nb';
        Axios.post(process.env.REACT_APP_SITE_URL_API+"/users/edit", {
            id: idUser,
            valeur: streetNb,
            champ: champ,
          }).then((response) => {
              if(response.data.verif)
              {
                setInformationstreetNb('Ton numéro de rue a bien été changé')
                document.getElementById("street_nb").value = '';
              }
        });
    }

    return (
        <div className="profile-field">
            <form onSubmit={validerChangement}>
                <label>Numéro de rue :</label><br />
                <input id='street_nb' className="pass-input" type="number" onChange={(e) => { setstreetNb(e.target.value) }} />
                <button id="btnModifier"><i class="far fa-save"></i></button>
          </form>  
          {informationstreetNb}
  
        </div>
      );
    }