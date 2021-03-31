import React, { useState } from "react";

import InputPassword from '../../components/form/RegisterForm/InputPassword';
import InputEmail from '../../components/form/RegisterForm/InputEmail';
import InputFirstname from '../../components/form/RegisterForm/InputFirstname';
import InputLastname from '../../components/form/RegisterForm/InputLastname';
import InputStreetNb from '../../components/form/RegisterForm/InputStreetNb';
import InputStreetName from '../../components/form/RegisterForm/InputStreetName';
import InputCity from '../../components/form/RegisterForm/InputCity';
import InputCountry from '../../components/form/RegisterForm/InputCountry';
import InputPostalCode from '../../components/form/RegisterForm/InputPostalCode';

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Profile.css';

export default function Profile() {

  const [editEmail, setEditEmail] = useState(true);
  const [editPsswd, setEditPsswd] = useState(false);

  const [currentActiveForm, setCurrentActiveForm] = useState('email');
 
  const toggleEmail = () =>
  {
    if(editEmail === false){
      setEditEmail(true)
      setEditPsswd(false)
      setCurrentActiveForm('email')
    }
  }

  const togglePsswd = () =>
  {
    if(editPsswd === false){
      setEditEmail(false)
      setEditPsswd(true)
      setCurrentActiveForm('psswd')
    }
  }

  return (
    <Row className="profile-form">

      <Col xl={12}>
        <h1 className="page-title">MODIFIER MON PROFIL</h1>
      </Col>

      <Col xl={6}>
        <div className="profile-fields">
          <InputFirstname />
          <InputLastname />
          <InputStreetNb />
          <InputStreetName />
          <InputPostalCode />
          <InputCity /> 
          <InputCountry />
        </div>
      </Col>

      <Col xl={6}>
        <Row>
          <Col sm={6} md={6} lg={6} xl={6}><button onClick={toggleEmail} className={ `btn-email-psswd ${ currentActiveForm === 'email' && 'activeForm' }` }>Mon email</button></Col>
          <Col sm={6} md={6} lg={6}xl={6}><button onClick={togglePsswd}  className={ `btn-email-psswd ${ currentActiveForm === 'psswd' && 'activeForm' }` }>Mon mot de passe</button></Col>
          <Col xl={12}>{editPsswd ? <InputPassword /> : <InputEmail />}</Col>
        </Row>
      </Col>
      
    </Row>    
  );
}