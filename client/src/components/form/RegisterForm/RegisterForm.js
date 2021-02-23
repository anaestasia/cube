import React, { useState } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import SubmitBtn from "../../buttons/SubmitBtn/SubmitBtn";
import Footer from "../../footer/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./RegisterForm.css";

var hash = require('object-hash');

export default function RegisterForm() {

  const [FirstNameReg, setFirstNameReg] = useState("");
  const [NameReg, setNameReg] = useState("");
  const [EmailReg, setEmailReg] = useState("");
  const [MDPReg, setMDPReg] = useState("");
  const [MDPDReg, setMDPDReg] = useState("");
  const [NbStreet, setNbStreet] = useState("");
  const [nameStreet, setnameStreet] = useState("");
  const [cityName, setCityName] = useState("");
  const [postalCode, setpostalCode] = useState("");
  const [nameCountry, setnameCountry] = useState("");
  
  const [registerStatus, setregisterStatus] = useState("");
  
  Axios.defaults.withCredentials = true;

  const register = event => {
    event.preventDefault();
    const mdpHash = hash.sha1(MDPReg);
    if(FirstNameReg.trim() !== '' && NameReg.trim() !== '' && EmailReg.trim() !== '' && MDPReg.trim() !== '' )
    {
      const date = new Date();
      const sqlDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
      if(MDPDReg === MDPReg){
        Axios.post(process.env.REACT_APP_SITE_URL_API+"/users/create", {
          firstname: FirstNameReg,
          lastname: NameReg,
          mail: EmailReg,
          password: mdpHash,
          token :'', //a generer automatiquepment
          street_nb :NbStreet,
          street_name	: nameStreet,
          city	:cityName,
          postal_code: postalCode,	
          country	:nameCountry,
          date_creation: sqlDate,//mettre date now en js	
          last_connexion	: sqlDate,//mettre date now en js
          checked	:'0',
          deleted	:'0',
          fk_role:'1', //regarder pour faire une recherche sur le nom sinon laisser l'id de la table role
        }).then((response) => {
          console.log(response);
          setregisterStatus(response.data.message);
          //window.location.href = "/";
        });
      }
      else
      {
        setregisterStatus('les deux mdp ne sont pas identiques');
      }
    }
    else
    {
        window.location.href = "/register";
    }
  };


  return (
    <Container fluid>
      <Row className="parent-row">

        <div className="registration">

          <Col xl={12}><h1 className="register">Inscription</h1></Col>

          <Col xl={12}>
            <form onSubmit={register}>

              <Row className="field">
                  <Col sm={12}><label>Prénom :</label></Col>
                  <Col sm={12}><input className="input-register" type="text" onChange={(e) => {setFirstNameReg(e.target.value); }} required/></Col>
              </Row>

              <Row className="field">
                  <Col sm={12}><label>Nom :</label></Col>
                  <Col sm={12}><input className="input-register" type="text" onChange={(e) => {setNameReg(e.target.value); }} required/></Col>
              </Row>
              
              <Row className="field">
                  <Col sm={12}><label>Email :</label></Col>
                  <Col sm={12}><input className="input-register" type="email" onChange={(e) => {setEmailReg(e.target.value); }} required/></Col>
              </Row>

              <Row className="field">
                  <Col sm={12}><label>Mot de passe :</label></Col>
                  <Col sm={12}><input className="input-register" type="password" minlength="12" onChange={(e) => {setMDPReg(e.target.value); }} required/></Col>
              </Row>

              <Row className="field">
                  <Col sm={12}><label>Confirmez votre mot de passe :</label></Col>
                  <Col sm={12}><input className="input-register" type="password" minlength="12" onChange={(e) => {setMDPDReg(e.target.value); }} required/></Col>
              </Row>

              <Row className="field">
                <Col xl={3} className="dble-field">
                  <Row>
                      <Col sm={12}><label>Numéro :</label></Col>
                      <Col sm={12}><input className="input-register" type="number" onChange={(e) => {setNbStreet(e.target.value); }}/></Col>
                  </Row>
                </Col>

                <Col xl={9} className="dble-field">
                  <Row>
                      <Col sm={12}><label>Rue :</label></Col>
                      <Col sm={12}><input className="input-register" type="text" onChange={(e) => {setnameStreet(e.target.value); }}/></Col>
                  </Row>
                </Col>  
              </Row>

              <Row className="field">
                  <Col sm={12}><label>Ville :</label></Col>
                  <Col sm={12}><input className="input-register" type="text" onChange={(e) => {setCityName(e.target.value); }}/></Col>
              </Row>

              <Row className="field">
                <Col xl={3} className="dble-field">
                  <Row>
                    <Col sm={12}><label>Code postal :</label></Col>
                    <Col sm={12}><input className="input-register" type="number" onChange={(e) => {setpostalCode(e.target.value); }}/></Col>
                  </Row>
                </Col>

                <Col xl={9} className="dble-field">
                  <Row>
                      <Col sm={12}><label>Pays :</label></Col>
                      <Col sm={12}><input className="input-register" type="text" onChange={(e) => {setnameCountry(e.target.value); }} /></Col>
                  </Row>
                </Col>  
              </Row>

              <Row className="btn-container">
                <Col sm={6} xl={6} className="btn-back-link"><Link to="/" className="btn-back">Annuler</Link></Col>
                <Col sm={6} xl={6}><SubmitBtn inputText="S'inscrire" /></Col>
              </Row>

            </form>
          </Col>

          <Col xl={12}><h1>{registerStatus}</h1></Col>
      
      </div>

      </Row>
      <Footer/>
    </Container>
  );
}
