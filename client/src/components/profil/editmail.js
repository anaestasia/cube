import React, { useState , useEffect } from "react";
import Axios from "axios";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function EditMail() {

    const [email1, setEmail1] = useState("anaestasia.mathieu@gmail.com");
    const [email2, setEmail2] = useState("");
    const [doubleEmailMessage, setDoubleEmailMessage] = useState("");

    const [idUser, setIdUser] = useState("");

    const [informationEmail, setInformationEmail] = useState("");
    
    useEffect(() => 
    {
        document.getElementById("inputEmail1").value = email1;
    })
    
    Axios.defaults.withCredentials = true;
  
    Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/login").then((response) => {
        if (response.data.loggedIn === true) {
            setIdUser(response.data.user[0].id)
        }
      });

      function emailIdentique1(e)
      {
        setEmail1(e.target.value)
        if(email2 === e.target.value){ 
            setDoubleEmailMessage('') 
            document.getElementById("btn-edit-email").disabled = false;
        } 
        else { 
            setDoubleEmailMessage('Les deux email ne sont pas identique')
            document.getElementById("btn-edit-email").disabled = true;
        }
    }
  
      function emailIdentique2(e)
      {
        setEmail2(e.target.value)
        if(email1 === e.target.value){ 
            setDoubleEmailMessage('') 
            document.getElementById("btn-edit-email").disabled = false;
        } 
        else { 
            setDoubleEmailMessage('Les deux email ne sont pas identique') 
            document.getElementById("btn-edit-email").disabled = true;
        }
    }

      function validerChangementEmail(event)
      {
        event.preventDefault();

        Axios.post(process.env.REACT_APP_SITE_URL_API+"/users/editEmail", {
            id: idUser,
            mail: email1
        }).then((response) => {
            if(response.data.verif)
            {
                setInformationEmail('Ton email a bien était changé')
                document.getElementById("inputEmail1").value = '';
                document.getElementById("inputEmail2").value = '';
                document.getElementById("btn-edit-email").disabled = true;
              }
        });
    }

    return (
        <Row className="profile-field-part-2">
            <Col sm={12}>
                <form onSubmit={validerChangementEmail} id="emailForm">
                    <Row>
                        <Col sm={12}><label>Email :</label></Col>
                        <Col sm={12}><input id='inputEmail1' className="pass-input" type="email"  onChange={(e) => { emailIdentique1(e) }} /></Col>
                    </Row>

                    <Row>
                        <Col sm={12}><label>Vérification email :</label></Col>
                        <Col sm={12}><input id='inputEmail2' className="pass-input"  type="email" onChange={(e) => { emailIdentique2(e) }} /></Col>
                        <Col sm={12}><span className="input-info">{doubleEmailMessage}</span></Col>
                    </Row>
                    <Col sm={12} className="btn-edit-text"><button id="btn-edit-email" form="emailForm" disabled> Modifier </button></Col>
            </form>  
            {informationEmail}

            </Col>
        </Row>
      );
    }





  