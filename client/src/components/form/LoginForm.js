import React, { useState } from "react";
import './LoginForm.css';
import { Link } from 'react-router-dom';
import Axios from "axios";
import SubmitBtn from "./SubmitBtn/SubmitBtn";

var hash = require('object-hash');

export default function LoginForm() {

  const [emailReg, setEmailReg] = useState("");
  const [mdpReg, setMDPReg] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  const login = event => {
    event.preventDefault();
    const password = hash.sha1(mdpReg);

    if(emailReg.trim() !== "")
    {
      Axios.post(process.env.REACT_APP_SITE_URL_API+"/users/login", {
        mail: emailReg,
        password: password,
      }).then((response) => {
           if (response.data.connecte) {
             console.log(response)
            const date = new Date();
            const sqlDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+(date.getHours())+":"+date.getMinutes()+":"+date.getSeconds();
            Axios.post(process.env.REACT_APP_SITE_URL_API+"/users/edit", {
              id: response.data.result[0].id,
              valeur: sqlDate,
              champ: "last_connexion",
          }).then((res) => { window.location.href = "/"; });
          } else {
            setLoginStatus("Impossible de se connecter");
          }
      });
    }
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

          <h1 className="msg-login-status">{loginStatus}</h1>

          <div className="btns">
            <SubmitBtn inputText="Se connecter" />
            <Link to="/register">Se créer un compte</Link>
          </div>

        </form>

      </div>
    );
  }