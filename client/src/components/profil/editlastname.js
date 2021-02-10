import React, { useState } from "react";
import Axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        <Row className="profile-field">
            <form onSubmit={validerChangement} id="lastnameForm">
              <Col sm={12}><label>Nom :</label></Col>
              <Row className="input-btn-field">
                <Col sm={10}><input id='lastName' className="pass-input" type="text" value="Mathieu" onChange={(e) => { setNom(e.target.value) }} /></Col>
                <Col sm={2}><button id="btn-edit" form="lastnameForm"><i class="far fa-save"></i></button></Col>
              </Row>
          </form>  
          {informationNom}
  
        </Row>
      );
    }