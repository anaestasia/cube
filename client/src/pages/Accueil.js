import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Accueil.css";
import LoginForm from '../components/form/LoginForm';
import { Link } from 'react-router-dom';


// import NormalUser from "../components/NormalUser";
// import Mod from "../components/Mod";
// import Admin from "../components/Admin";

export default function Accueil() {

  return (
    <div>
      {/* mettre icone */}
      <LoginForm />
      <Link to="/main">main menu</Link> {/* ton logo pour entrer dans le site */}
     
    </div>
  );
}
