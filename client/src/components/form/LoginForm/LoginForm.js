import React from "react";
import { Link } from 'react-router-dom';
import SubmitBtn from "../../buttons/SubmitBtn/SubmitBtn";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './LoginForm.css';

export default function LoginForm( { onSubmit, onChange, formValue }) {
    
    return (
      
      <form onSubmit={ onSubmit } className="login-form" onChange={ onChange }>
        
          <div className="email-field">
            <label>Email :</label>
            <input className="email-input" type="email" name="email" value={ formValue.email }/>
          </div>

          <div className="pass-field">
            <label>Mot de passe :</label>
            <input className="pass-input" type="password" name="password" value={ formValue.password }/>
          </div>

          <div className="btns">
            <SubmitBtn inputText="Se connecter" />
            <Link to="/register">Se créer un compte</Link>
          </div>

        </form>
      
    );
  }