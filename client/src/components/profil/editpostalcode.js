import React, { useState } from "react";
import Axios from "axios";

export default function EditPostalCode() {
 
    const [postalCode, setPostalCode] = useState("");

    const [idUser, setIdUser] = useState("");

    const [informationPostalCode, setInformationPostalCode] = useState("");
    
    Axios.defaults.withCredentials = true;
  
    Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/login").then((response) => {
        if (response.data.loggedIn === true) {
            setIdUser(response.data.user[0].id)
        }
      });

    function validerChangement(event)
    {
        event.preventDefault();
        const champ = 'postal_code';
        Axios.post(process.env.REACT_APP_SITE_URL_API+"/users/edit", {
            id: idUser,
            valeur: postalCode,
            champ: champ,
          }).then((response) => {
              if(response.data.verif)
              {
                setInformationPostalCode('Ton code postal bien été changé')
                document.getElementById("postal_codeId").value = '';
              }
        });
    }

    return (
        <div className="profile-field">
            <form onSubmit={validerChangement}>
                <label>Code postale :</label><br />
                <input id='postal_codeId' max="99999" className="pass-input" type="number" onChange={(e) => { setPostalCode(e.target.value) }} />
                <button id="btnModifier"><i class="far fa-save"></i></button>
          </form>  
          {informationPostalCode}
  
        </div>
      );
    }