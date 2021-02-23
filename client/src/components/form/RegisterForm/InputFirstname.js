import React, { useState , useEffect } from "react";
import Axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function EditFirstname() {
 
    const [prenom, setPrenom] = useState("");

    const [idUser, setIdUser] = useState("");

    const [informationPrenom, setInformationPrenom] = useState("");
    
    Axios.defaults.withCredentials = true;

    useEffect(() => 
    {
        Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/login").then((response) => {
            if (response.data.loggedIn === true) {
                setIdUser(response.data.user[0].id)
                Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/getid/"+response.data.user[0].id).then((resp) => {
                    document.getElementById("firstName").value = resp.data[0].firstname;
                    setPrenom(resp.data[0].firstname)
                })
            }
        });
    }, []); 

    function validerChangement(event)
    {
        event.preventDefault();
        const champ = 'firstname';
        Axios.post(process.env.REACT_APP_SITE_URL_API+"/users/edit", {
            id: idUser,
            valeur: prenom,
            champ: champ,
          }).then((response) => {
              if(response.data.verif)
              {
                setInformationPrenom('Ton prénom a bien été changé')
                // document.getElementById("firstName").value = '';
                setInterval(() => {
                  setInformationPrenom('')
                }, 2000);
              }
        });
    }

    return (
        <Row className="profile-field">
            <form onSubmit={validerChangement} id="firstnameForm">
                <Col sm={12}><label>Prénom :</label></Col>
                <Row className="input-btn-field">
                  <Col sm={10}><input id='firstName' className="pass-input" type="text" onChange={(e) => { setPrenom(e.target.value) }} /></Col>
                  <Col sm={2}><button id="btn-edit" form="firstnameForm"><i className="far fa-save"></i></button></Col>
                </Row>
          </form>  
          {informationPrenom}
  
        </Row>
      );
    }