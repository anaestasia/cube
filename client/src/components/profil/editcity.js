import React, { useState } from "react";
import Axios from "axios";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

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
        <Row className="profile-field">
            <form onSubmit={validerChangement} id="cityForm">
              <Col sm={12}><label>Nom de la ville :</label></Col>
              <Row className="input-btn-field">
                <Col sm={10}><input id='cityId' className="pass-input" type="text" value="AngelCity" onChange={(e) => { setCity(e.target.value) }} /></Col>
                <Col sm={2}><button id="btn-edit" form="cityForm"><i class="far fa-save"></i></button></Col>
              </Row>
          </form>  
          {informationCity}
  
        </Row>
      );
    }