import React, { useState } from "react";
import Axios from "axios";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

var hash = require('object-hash');

export default function EditPassword() {

    const [mdp1, setMdp1] = useState("");
    const [mdp2, setMdp2] = useState("");
    const [doubleMdpMessage, setDoubleMdpMessage] = useState("");
    const [doubleMdpBool, setDoubleMdpBool] = useState("");

    const [bonMDPMessage, setBonMDPMessage] = useState("");
    const [bonMDPBool, setBonMDPBool] = useState("");

    const [email, setEmail] = useState("");
    const [idUser, setIdUser] = useState("");

    const [informationMDP, setInformationMDP] = useState("");
    
    Axios.defaults.withCredentials = true;
  
    // const login = event => {
    //   event.preventDefault();
    //   const password = hash.sha1(mdpReg);
  
    //     Axios.post(process.env.REACT_APP_SITE_URL_API+"/users/login", {
    //       password: password,
    //     }).then((response) => {
    //          if (response.data.connecte) {
    //           window.location.href = "/";
    //         } else {
    //           setLoginStatus("Impossible de se connecter");
    //         }
    //     });
    // };

    Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/login").then((response) => {
        if (response.data.loggedIn === true) {
            setEmail(response.data.user[0].mail);
            setIdUser(response.data.user[0].id)
        }
      });

    function verifSibonMDP(e)
    {
        const password = hash.sha1(e.target.value);

        Axios.post(process.env.REACT_APP_SITE_URL_API+"/users/login", {
            password: password,
            mail: email,
          }).then((response) => {
            if(response.data.connecte)
            {
                setBonMDPMessage("Ok ✓")
                setBonMDPBool(true)
                changerMdp('ancienMDP',true)
            }
            else
            {
                setBonMDPMessage("Incorrect ❌")
                setBonMDPBool(false)
                changerMdp('ancienMDP',false)
            }
        });
    }

    function mdpIdentique1(e)
    {
        setMdp1(e.target.value)
        if(mdp2 === e.target.value){ 
            setDoubleMdpMessage('') 
            setDoubleMdpBool(true)
            changerMdp('doubleMDP',true)
        } 
        else { 
            setDoubleMdpMessage('Les deux mot de passe ne sont pas identique') 
            setDoubleMdpBool(false);
            changerMdp('doubleMDP',false)
        }
    }

    function mdpIdentique2(e)
    {
        setMdp2(e.target.value)
        if(mdp1 === e.target.value){ 
            setDoubleMdpMessage('') 
            setDoubleMdpBool(true)
            changerMdp('doubleMDP',true)
        } 
        else { 
            setDoubleMdpMessage('Les deux mot de passe ne sont pas identique') 
            setDoubleMdpBool(false)
            changerMdp('doubleMDP',false)
        }
    }

    function changerMdp(module,valeur)
    {
        if(module === 'ancienMDP')
        {
            if(doubleMdpBool && valeur){ document.getElementById("btnModifier").disabled = false; }
            else { document.getElementById("btnModifier").disabled = true; }
        }
        else if(module === 'doubleMDP')
        {
            if(valeur && bonMDPBool){ document.getElementById("btnModifier").disabled = false; }
            else { document.getElementById("btnModifier").disabled = true; }
        }
    }

    function validerChangementMdp(event)
    {
        event.preventDefault();

        const mdphash =  hash.sha1(mdp2);
        Axios.post(process.env.REACT_APP_SITE_URL_API+"/users/editPassword", {
            password: mdphash,
            id: idUser,
          }).then((response) => {
              if(response.data.verif)
              {
                setInformationMDP('Ton mot de passe a bien était changé')
                document.getElementById("ancienMDP").value = '';
                document.getElementById("inputMDP1").value = '';
                document.getElementById("inputMDP2").value = '';
                document.getElementById("btnModifier").disabled = true;
              }
        });
    }

    return (
        <Row className="password-field">
            <Col sm={12}>
                <form onSubmit={validerChangementMdp} id="passForm">
                <Row>
                    <Col sm={12}><label>Ancien mot de passe :</label></Col>
                    <Col sm={12}><input id='ancienMDP' className="pass-input" type="password"  value="motdepassedetest" onChange={(e) => {verifSibonMDP(e) }} /> { '  ' }</Col>
                    <Col sm={12}><span>{bonMDPMessage}</span></Col>
                </Row>
                
                <Row>
                    <Col sm={12}><label>Mot de passe :</label></Col>
                    <Col sm={12}><input id='inputMDP1' className="pass-input"  minlength="12" type="password" onChange={(e) => { mdpIdentique1(e) }} /></Col>
                </Row>
                <Row>
                    <Col sm={12}><label>Vérification mot de passe :</label></Col>
                    <Col sm={12}><input id='inputMDP2' className="pass-input"  minlength="12" type="password" onChange={(e) => { mdpIdentique2(e) }} /></Col>
                    <Col sm={12}><span>{doubleMdpMessage}</span></Col>
                </Row>
                <Row>
                    <Col sm={12} className="btn-edit-text"><button id="btn-edit-password" form="passForm" disabled> Modifier </button></Col>
                </Row>

                    
                </form>  
                {informationMDP}
            </Col>
        </Row>
      );
    }





  