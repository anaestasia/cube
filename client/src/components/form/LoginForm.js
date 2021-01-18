import React, { useEffect, useState } from "react";
import './LoginForm.css';
import { Link } from 'react-router-dom';
import Axios from "axios";
import SubmitBtn from "./SubmitBtn/SubmitBtn";

var hash = require('object-hash');

export default function LoginForm() {

  const [emailReg, setEmailReg] = useState("");
  const [mdpReg, setMDPReg] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    const password = hash.sha1(mdpReg);

    Axios.post("http://localhost:3001/users/login", {
      mail: emailReg,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

    return (
      <div className="login-form">

        <form onSubmit={login}>

          <div className="email-field">
            <label>Email :</label>
            <input className="email-input" type="email" onChange={(e) => {setEmailReg(e.target.value); }} />
          </div>

          <div className="pass-field">
            <label>Mot de passe :</label>
            <input className="pass-input" type="password" onChange={(e) => {setMDPReg(e.target.value); }} />
          </div>

          <h1>{loginStatus}</h1>

          <div className="btns">
            <SubmitBtn inputText="Se connecter" />
            <Link to="/register">Se créer un compte</Link>
          </div>

        </form>

      </div>
    );
  }