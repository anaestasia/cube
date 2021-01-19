import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Dashboard.css";
import LoginForm from '../../components/form/LoginForm';
import { Link } from 'react-router-dom';
import Ressource from "../../components/ressource/Ressource";
import MenuFilter from "../../components/menu/MenuFilter/MenuFilter";

// import NormalUser from "../components/NormalUser";
// import Mod from "../components/Mod";
// import Admin from "../components/Admin";

export default function DashBoard() {

  return (
    <div>
      <Ressource />
      <MenuFilter />
      <Link to="/main">main menu</Link> 

    </div>
  );
}