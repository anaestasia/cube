import React, { useState } from "react";
import Axios from "axios";

export default function EditCity() {
 
    const [city, setCity] = useState("");

    const [idUser, setIdUser] = useState("");

    const [informationCity, setInformationCity] = useState("");
    
    Axios.defaults.withCredentials = true;
  
    Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/login").then((response) => {
        if (response.data.loggedIn === true) {
            setIdUser(response.data.user[0].id)
        }
      });

    function validerChangement(event)
    {
        event.preventDefault();
        const champ = 'city';
        Axios.post(process.env.REACT_APP_SITE_URL_API+"/users/edit", {
            id: idUser,
            valeur: city,
            champ: champ,
          }).then((response) => {
              if(response.data.verif)
              {
                setInformationCity('Ta ville a bien été changé')
                document.getElementById("cityId").value = '';
              }
        });
    }

    return (
        <div >
            <form onSubmit={validerChangement}>
                <label>Nom de la ville :</label><br />
                <input id='cityId' className="pass-input" type="text" onChange={(e) => { setCity(e.target.value) }} /><br /><br />

                <button id="btnModifier"> Modifier </button>
          </form>  
          {informationCity}
  
        </div>
      );
    }