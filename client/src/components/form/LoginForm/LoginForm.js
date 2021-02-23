import React, { useState } from "react";
import { Link } from 'react-router-dom';
import SubmitBtn from "../../buttons/SubmitBtn/SubmitBtn";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './LoginForm.css';

export default function LoginForm( { onSubmit, connected, onChange }) {
    
    return (
      
      <Row className="login-row">
        <form onSubmit={ onSubmit } className="login-form">
          <Col className="email-field">
            <label>Email :</label>
            <input className="email-input" type="email" name="email" onChange={ onChange } />
          </Col>

          <Col className="pass-field">
            <label>Mot de passe :</label>
            <input className="pass-input" type="password" name="password" onChange={ onChange } />
          </Col>

          <Col><h1 className="msg-login-status">{ connected === false ? "Erreur" : "OK"}</h1></Col>

          <Col className="btns">
            <Row>
              <Col sm={12} md={12} xl={6}><SubmitBtn inputText="Se connecter" /></Col>
              <Col sm={12} md={12} xl={6}><Link to="/register">Se créer un compte</Link></Col>
            </Row>
          </Col>
        </form>
      </Row>
      
    );
  }