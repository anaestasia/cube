import React, { useState } from "react";
import Axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        <Row className="profile-field">
            <form onSubmit={validerChangement} id="streetForm">
              <Col sm={12}><label>Nom de rue :</label></Col>
              <Row className="input-btn-field">
                <Col sm={10}><input id='street_name' className="pass-input" type="text" value="Rue de la Paix" onChange={(e) => { setstreetName(e.target.value) }} /></Col>
                <Col sm={2}><button id="btn-edit" form="streetForm"><i class="far fa-save"></i></button></Col>
              </Row>
          </form>  
          {informationstreetName}
  
        </Row>
      );
    }