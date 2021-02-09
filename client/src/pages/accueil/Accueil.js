import { Link } from 'react-router-dom';
import LoginForm from '../../components/form/LoginForm';
import BtnDeconnexion from '../../components/button/btndeconnexion/btndeconnexion';
import "./Accueil.css";
import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function Accueil() {

  const [role, setRole] = useState("");

  Axios.defaults.withCredentials = true;
  useEffect(() => {

    Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/login").then((response) => {
      if (response.data.loggedIn === true) {
        setRole(response.data.user[0].fk_role);
      }
    });
  }, []);

  return (
    <div className="accueil-container">

      <div className="logo-container">
        <img src="/img/logo/logo_ressources_relationnelles_transparent.png" className="App-logo-menu" alt="logo" />
      </div>

      <div className="container-form">
        {role === "" && <LoginForm />}
        {role !== "" && <BtnDeconnexion />}

        <div className="btn-discover">
          <img src="/img/discover.png" className="App-logo-menu" alt="logo" />
          <Link to="/catalog">Découvrir</Link>
        </div>
      </div>

    </div>
  );
}
