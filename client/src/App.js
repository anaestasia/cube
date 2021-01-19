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

  if(role >= 0) //pas connecte
  {
    login = true;
    register = true;
    accueil = true;
    main = true;
    dashboard = true;
    ressource = true;
  }
  if (role >= 1) //Mail non verifé 
  {
    login = false;
    register = false;
  }
  if (role >= 2) //Citoyen
  {
    
  }
  if (role >= 3) //Modérateur
  {
    
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
        <Route exact path="/ressource" render={(props) =>  ressource ? <RessourcePage />: <NotFound />} />
        <Route exact path="/register" render={(props) =>  register ? <Register />: <NotFound />} />
        <Route exact path="/login" render={(props) =>  login ? <Login />: <NotFound />} />
        <Route exact path="/Main" render={(props) =>  main ? <Main />: <NotFound />} />
        <Route exact path="/" render={(props) => accueil ? <Accueil /> : <NotFound />} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;