import React, { useState } from "react";
import Axios from "axios";

export default function EditCountry() {
 
    const [country, setCountry] = useState("");

    const [idUser, setIdUser] = useState("");

    const [informationCountry, setInformationsCountry] = useState("");
    
    Axios.defaults.withCredentials = true;
  
    Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/login").then((response) => {
        if (response.data.loggedIn === true) {
            setIdUser(response.data.user[0].id)
        }
      });

    function validerChangement(event)
    {
        event.preventDefault();
        const champ = 'country';
        Axios.post(process.env.REACT_APP_SITE_URL_API+"/users/edit", {
            id: idUser,
            valeur: country,
            champ: champ,
          }).then((response) => {
              if(response.data.verif)
              {
                setInformationsCountry('Ton pays a bien été changé')
                document.getElementById("countryId").value = '';
              }
        });
    }

    return (
        <div className="profile-field">
            <form onSubmit={validerChangement}>
                <label>Pays :</label><br />
                <input id='countryId' className="pass-input" type="text" onChange={(e) => { setCountry(e.target.value) }} />
                <button id="btnModifier"><i class="far fa-save"></i></button>
          </form>  
          {informationCountry}
  
        </div>
      );
    }