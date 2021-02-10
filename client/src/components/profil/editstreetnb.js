import React, { useState } from "react";
import Axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        <Row className="profile-field">
            <form onSubmit={validerChangement} id="nbStreetForm">
              <Col sm={12}><label>Numéro de rue :</label></Col>
              <Row className="input-btn-field">
                <Col sm={10}><input id='street_nb' className="pass-input" type="number"  value={1} onChange={(e) => { setstreetNb(e.target.value) }} /></Col>
                <Col sm={2}><button id="btn-edit" form="nbStreetForm"><i class="far fa-save"></i></button></Col>
              </Row>
          </form>  
          {informationstreetNb}
  
        </Row>
      );
    }