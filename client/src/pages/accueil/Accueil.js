import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Axios from "axios";
import LoginForm from '../../components/form/LoginForm';
import "./Accueil.css";


// import NormalUser from "../components/NormalUser";
// import Mod from "../components/Mod";
// import Admin from "../components/Admin";


export default function Accueil() {

  return (
    <div className="accueil-container">

      <div className="logo-container">
        <img src="/img/logo/logo_ressources_relationnelles_transparent.png" className="App-logo-menu" alt="logo" />
      </div>

      <div className="container-form">
        <LoginForm />

        <div className="btn-discover">
          <img src="/img/discover.png" className="App-logo-menu" alt="logo" />
          <Link to="/main">Découvrir</Link>
        </div>

      </div>

    </div>
  );
}
