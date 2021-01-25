import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route , Switch  } from "react-router-dom";
import "./App.css";
import Accueil from "./pages/accueil/Accueil";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Main from "./pages/Main";
import NotFound from './pages/404/404';
import Axios from "axios";
import DashBoard from "./pages/dashboard/Dashboard";
import RessourcePage from "./pages/ressource/Ressource";
import NoAccess from "./pages/403/403";
import Token from "./pages/token/token";
import Ressourcenonconnecte from "./pages/ressourcenonconnecte/ressourcenonconnecte";
import Admin from "./pages/Admin/Admin"
import SubmitRessource from "./pages/SubmitRessource";
import Profil from "./pages/profil/profil";

require('dotenv').config()

function App() {

  const [role, setRole] = useState("");

  Axios.defaults.withCredentials = true;
  useEffect(() => {

    Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/login").then((response) => {
      if (response.data.loggedIn === true) {
        setRole(response.data.user[0].fk_role);
      }
      else
      {
        setRole(0);
      }
    });
  }, []);
  let register;
  let login;
  let main;
  let accueil;
  let dashboard;
  let ressource;
  let ressourceNonCo ;
  let admin;
  let submitRessource;
  let profil;

  if(role >= 0) //pas connecte
  {
    login = true;
    register = true;
    accueil = true;
    main = true;
    dashboard = true;
    ressource = true;
    ressourceNonCo = true;
    admin = false;
    submitRessource = false;
    profil = false;
  }
  if (role >= 1) //Mail non verifé 
  {
    login = false;
    register = false;
    profil = true;
  }
  if (role >= 2) //Citoyen
  {
    ressourceNonCo = false;
    submitRessource = true;
  }
  if (role >= 3) //Modérateur
  {
    admin = true;
  }
  if (role >= 4) //Admin
  {
    
  }
  if (role >= 5) //Super-Admin
  {
    
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => accueil ? <Accueil /> : <NotFound />} />
        <Route exact path="/Main" render={(props) =>  main ? <Main />: <NoAccess />} />
        <Route exact path="/ressource/:id" render={(props) =>  ressource ? <RessourcePage />: <NotFound />} />
        <Route exact path="/ressourcenonConnecte" render={(props) =>  ressourceNonCo ? <Ressourcenonconnecte />: <NotFound />} />
        <Route exact path="/register" render={(props) =>  register ? <Register />: <NoAccess />} />
        <Route exact path="/login" render={(props) =>  login ? <Login />: <NoAccess />} />
        <Route exact path="/token/:token" render={(props) =>  <Token />} />
        <Route exact path="/dashboard" render={(props) => dashboard ? <DashBoard /> : <NoAccess />} />
        <Route exact path="/admin" render={(props) => admin ? <Admin /> : <NotFound />} />
        <Route exact path="/submitressource" render={(props) => submitRessource ? <SubmitRessource /> : <NoAccess />} />
        <Route exact path="/profil" render={(props) => profil ? <Profil /> : <NoAccess />} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;