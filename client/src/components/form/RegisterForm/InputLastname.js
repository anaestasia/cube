import React, { useState , useEffect } from "react";
import Axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function EditLastName() {
 
    const [nom, setNom] = useState("");

    const [idUser, setIdUser] = useState("");

    const [informationNom, setInformationNom] = useState("");
    
    Axios.defaults.withCredentials = true;
  
    useEffect(() => 
    {
        Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/login").then((response) => {
            if (response.data.loggedIn === true) {
                setIdUser(response.data.user[0].id)
                Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/getid/"+response.data.user[0].id).then((resp) => {
                    document.getElementById("lastName").value = resp.data[0].lastname;
                    setNom(resp.data[0].lastname)
                })
            }
        });
    }, []);

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
                setInformationNom('Ton nom a bien été changé')
                // document.getElementById("lastName").value = '';
                setInterval(() => {
                  setInformationNom('')
                }, 2000);
              }
        });
    }

    return (
        <>
            <form onSubmit={validerChangement} id="lastnameForm" className="field-form">
              <Row>
                <Col sm={12}><label>Nom :</label></Col>
                <Col sm={10}><input id='lastName' className="pass-input" type="text" onChange={(e) => { setNom(e.target.value) }} /></Col>
                <Col sm={2}><button id="btn-edit" form="lastnameForm"><i className="far fa-save"></i></button></Col>
              </Row>
          </form>  
          {informationNom}
        </>
      );
    }