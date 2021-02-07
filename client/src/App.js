import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route , Switch  } from "react-router-dom";
import "./App.css";
import Accueil from "./pages/accueil/Accueil";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Catalog from "./pages/catalog/Catalog";
import NotFound from './pages/404/404';
import Axios from "axios";
import RessourcePage from "./pages/ressource/Ressource";
import NoAccess from "./pages/403/403";
import Token from "./pages/token/token";
import Ressourcenonconnecte from "./pages/ressourcenonconnecte/ressourcenonconnecte";
import MyRessources from "./pages/myRessources/MyRessources";
import MyFavorites from "./pages/myFavorites/MyFavorites";
import Admin from "./pages/Admin/Admin"
import SubmitRessource from "./pages/SubmitRessource";
import AdminApprovedRessources from "./pages/Admin/approvedRessources/ApprovedRessources"
import Profile from "./pages/profile/Profile";

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
  let catalog;
  let accueil;
  let ressource;
  let myRessources;
  let myFavorites;
  let ressourceNonCo ;
  let admin;
  let submitRessource;
  let adminApprovedRessources;
  let profile;

  if(role >= 0) //pas connecte
  {
    login = true;
    register = true;
    accueil = true;
    catalog = true;
    ressource = true;
    myRessources = true;
    myFavorites = true;
    ressourceNonCo = true;
    admin = false;
    submitRessource = false;
    adminApprovedRessources = false;
    profile = false;
  }
  if (role >= 1) //Mail non verifé 
  {
    login = false;
    register = false;
    profile = true;
  }
  if (role >= 2) //Citoyen
  {
    ressourceNonCo = false;
    submitRessource = true;
  }
  if (role >= 3) //Modérateur
  {
    admin = true;
    adminApprovedRessources = true;
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
        <Route exact path="/register" render={(props) =>  register ? <Register />: <NoAccess />} />
        <Route exact path="/login" render={(props) =>  login ? <Login />: <NoAccess />} />
        <Route exact path="/token/:token" render={(props) =>  <Token />} />

        {/* RESSOURCES */}
        <Route exact path="/catalog" render={(props) =>  catalog ? <Catalog />: <NoAccess />} />
        <Route exact path="/submit-ressource" render={(props) => submitRessource ? <SubmitRessource /> : <NoAccess />} />
        <Route exact path="/ressource/:id" render={(props) =>  ressource ? <RessourcePage />: <NotFound />} />
        <Route exact path="/ressourcenonConnecte" render={(props) =>  ressourceNonCo ? <Ressourcenonconnecte />: <NotFound />} />
        
        {/* USER */}
        <Route exact path="/catalog" render={(props) => catalog ? <Catalog /> : <NoAccess />} />
        <Route exact path="/profile" render={(props) => profile ? <Profile /> : <NoAccess />} />
        <Route exact path="/my-ressources" render={(props) =>  myRessources ? <MyRessources />: <NoAccess />} />
        <Route exact path="/my-favorites" render={(props) =>  myFavorites ? <MyFavorites />: <NoAccess />} />

        {/* BO */}
        <Route exact path="/admin" render={(props) => admin ? <Admin /> : <NotFound />} />
        <Route exact path="/admin/approvedRessources" render={(props) => adminApprovedRessources ? <AdminApprovedRessources /> : <NotFound />} />


        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;