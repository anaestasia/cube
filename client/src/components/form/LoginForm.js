import React, { useEffect, useState } from "react";
import './LoginForm.css';
import { Link } from 'react-router-dom';
import Axios from "axios";

var hash = require('object-hash');

export default function LoginForm() {

  const [EmailReg, setEmailReg] = useState("");
  const [MDPReg, setMDPReg] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    const password = hash.sha1(MDPReg);

    Axios.post("http://localhost:3001/users/login", {
      mail: EmailReg,
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
      <div>
      <form onSubmit={login}>
        <label>
          Email :
          <i class="fas fa-at"></i>
          <input type="email" onChange={(e) => {setEmailReg(e.target.value); }} />
        </label><br/>
        <label>
          Mot de passe :
          <i class="fas fa-unlock-alt"></i>
          <input type="password" onChange={(e) => {setMDPReg(e.target.value); }} />
        </label><br/>
        <input type="submit" value='Se connecter'/>
        <Link to="/register">s'inscrire</Link>
      </form>
      <h1>{loginStatus}</h1>
      </div>
    );
  }