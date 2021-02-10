import React, { useState } from "react";
import Axios from "axios";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

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
        <Row className="profile-field">
            <form onSubmit={validerChangement} id="codeForm">
              <Col sm={12}><label>Code postale :</label></Col>
              <Row className="input-btn-field">
                <Col sm={10}><input id='postal_codeId' max="99999" className="pass-input" type="number" value="01001" onChange={(e) => { setPostalCode(e.target.value) }} /></Col>
                <Col sm={2}><button id="btn-edit" form="codeForm"><i class="far fa-save"></i></button></Col>
              </Row>
          </form>  
          {informationPostalCode}
  
        </Row>
      );
    }