import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Axios from "axios";

// PAGES
import Home from "./pages/home/Home";
import NoAccess from "./pages/403/403";
import NotFound from "./pages/404/404";
import Admin from "./components/admin/Admin";
import Catalog from "./pages/Catalog/Catalog";
import Profile from "./pages/profile/Profile";
import Favorites from "./components/ressource/Favorites/Favorites";
import MyRessources from "./pages/MyRessources/MyRessources";

// COMPONENTS
import Navbar from "./components/navbar/Navbar";
import CookieBanner from "./components/cookieBanner/CookieBanner";
import Footer from "./components/footer/Footer";
import RegisterForm from "./components/form/RegisterForm/RegisterForm";
import Ressource from "./components/form/RessourceForm/RessourceFormEdit";
import SubmitRessource from "./components/form/RessourceForm/RessourceForm";
import RessourceNotConnected from "./components/ressource/RessourceNotConnected/RessourceNotConnected";
import AdminApprovedRessources from "./components/admin/approvedRessources/ApprovedRessources";
import AdminHandleRessources from "./components/admin/handleRessources/HandleRessources"
import AdminHandleRessourcesType from "./components/admin/handleRessourcesType/HandleRessourcesType"
import AdminHandleRelationshipType from "./components/admin/handleRelationshipType/HandleRelationshipType"
import AdminHandlePunishement from "./components/admin/handlePunishement/HandlePunishement"
import AdminHandleReportReason from "./components/admin/handleReportReason/HandleReportReason"
import AdminHandleUser from "./components/admin/handleUser/HandleUser"
import AdminHandleComment from "./components/admin/handleComments/Comments";
import DocVisitor from "./pages/Docs/DocVisitor.js"
import DocCitizen from "./pages/Docs/DocCitizen.js"
import DocModerator from "./pages/Docs/DocModerator.js"
import DocAdmin from "./pages/Docs/DocAdmin.js"

import Token from "./components/token/token";


// STYLE
import Container from "react-bootstrap/Container";

import './fonts/SegoePrint/SegoePrint.ttf';
import './fonts/Roboto/Roboto-Light.ttf';
import './fonts/Oswald/Oswald-Medium.ttf';
import "./App.css";

require("dotenv").config();

function App() {

  const [role, setRole] = useState("");// eslint-disable-next-line
  const [status, setStatus] = useState("2");
  const [lastRessources, setLastRessources] = useState([]);
  const [connected, setConnected] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password:'' });

  Axios.defaults.withCredentials = true;

  const handleLogin = (event) => {
    event.preventDefault();
    var hash = require("object-hash");
    const password = hash.sha1(loginForm.password);

    if (loginForm.email.trim() !== "") {

      Axios.post(process.env.REACT_APP_SITE_URL_API + "/users/login", {
        mail: loginForm.email,
        password: password,
      }).then((response) => {

        if (response.data.connecte) {

          const date = new Date();
          const sqlDate =
            date.getFullYear() +
            "-" +
            (date.getMonth() + 1) +
            "-" +
            date.getDate() +
            " " +
            date.getHours() +
            ":" +
            date.getMinutes() +
            ":" +
            date.getSeconds();

          Axios.post(process.env.REACT_APP_SITE_URL_API + "/users/edit", {
            id: response.data.result[0].id,
            valeur: sqlDate,
            champ: "last_connexion",
          })
            .then((res) => {
              setConnected(true);
              window.location = "/catalog";
            })
        } else {
          setConnected(false);
        }
      });
    }
  };

  const handleOnChange = (event) => {
    setLoginForm( { ...loginForm, [ event.target.name ] : event.target.value } )
  };

  useEffect(() => {
    Axios.get(process.env.REACT_APP_SITE_URL_API + "/users/login").then(
      (response) => {
        if (response.data.loggedIn === true) {
          setRole(response.data.user[0].fk_role);
          setConnected(true);
        } else {
          setRole(0);
          setConnected(false);
        }
      }
    );

    Axios.get(
      process.env.REACT_APP_SITE_URL_API + "/ressources/lastressource/" + status
    ).then((response) => {
      if (response.data.existe !== false) {
        setLastRessources(response.data);
      }
    });
  }, [status]);

  Axios.defaults.withCredentials = true;

  // Droit pour les non connecté (role = "")
  let login = true;
  let register = true;
  let home = true;
  let catalog = true;
  let ressource = true;
  let myRessources = false;
  let myFavorites = true;
  let ressourceNotConnected = true;
  let admin = false;
  let submitRessource = false;
  let adminApprovedRessources = false;
  let profile = false;
  let adminGereRessources = false;
  let manageComments = false;
  let adminHandleUser = false;

  if (role >= 1) {
    // Mail non verifé
    // eslint-disable-next-line
    login = false;
    register = false;
    profile = true;
  }
  if (role >= 2) {
    // Citoyen
    myRessources = true;
    ressourceNotConnected = false;
    submitRessource = true;
  }
  if (role >= 3) {
    // Modérateur
    admin = true;
    adminApprovedRessources = true;
    adminGereRessources = true;
    manageComments = true;
  }
  if (role >= 4) {
    // Admin
    adminHandleUser = true;
  }
  if (role >= 5) {
    // Super-Admin
  }
  
  return (
    <>
      <Navbar />

      <Container fluid className="pages">

        <Switch>

          {/* HOME */}
          <Route
            exact
            path="/"
            render={(props) =>
              home ? (
                <Home onSubmit={handleLogin} formValue={ loginForm } onChange={ handleOnChange } connected = { connected }/>
              ) : (
                <NotFound />
              )
            }
            onChange={handleOnChange}
          />

          {/* CATALOGUE */}
          <Route
            exact
            path="/catalog"
            render={(props) =>
              catalog ? (
                <Catalog ressources={lastRessources} />
              ) : (
                <NoAccess />
              )
            }
          />

          {/* RESSOURCE - Ajout ressource */}
          <Route
            exact
            path="/submit-ressource"
            render={ (props) =>  (submitRessource ? <SubmitRessource /> : <NotFound /> ) }
          />

          {/* RESSOURCE - Lecture ressource */}
          <Route
            exact
            path="/ressource/:id"
            render={(props) => (ressource ? <Ressource /> : <NotFound />)}
          />

          {/* RESSOURCE - Non connecté */}
          <Route
            exact
            path="/ressource-not-connected"
            render={(props) =>
              ressourceNotConnected ? (
                <RessourceNotConnected />
              ) : (
                <NotFound />
              )
            }
          />

          {/* USER - Modifier mon profil */}
          <Route
            exact
            path="/profile"
            render={(props) => (profile ? <Profile /> : <NoAccess />)}
          />

          {/* USER - Mes ressources personnelles */}
          <Route
            exact
            path="/my-ressources"
            render={(props) =>
              myRessources ? <MyRessources /> : <NoAccess />
            }
          />

          {/* USER - Mes ressources préférée */}
          <Route
            exact
            path="/my-favorites"
            render={(props) => (myFavorites ? <Favorites /> : <NoAccess />)}
          />

          {/* INSCRIPTION */}
          <Route
            exact
            path="/register"
            render={(props) => (register ? <RegisterForm /> : <NoAccess />)}
          />
          <Route exact path="/token/:token" render={(props) => <Token />} />

          {/* BO - Dashboard */}
          <Route
            exact
            path="/admin"
            render={(props) => (admin ? <Admin /> : <NotFound />)}
          />

          {/* BO - Gérer les utilisateurs */}
          <Route
            exact
            path="/admin/users"
            render={(props) =>
              adminHandleUser ? (
                <AdminHandleUser/>
              ) : (
                <NotFound />
              )
            }
          />

          {/* BO - Approuver les ressources */}
          <Route
            exact
            path="/admin/approvedRessources"
            render={(props) =>
              adminApprovedRessources ? (
                <AdminApprovedRessources />
              ) : (
                <NotFound />
              )
            }
          />

          {/* BO - Types de ressources */}
          <Route
            exact
            path="/admin/ressources-types"
            render={(props) =>
              adminGereRessources ? (
                <AdminHandleRessourcesType role={role} />
              ) : (
                <NotFound />
              )
            }
          />

          {/* BO - Types de relations */}
          <Route
            exact
            path="/admin/relationships-types"
            render={(props) =>
              adminGereRessources ? (
                <AdminHandleRelationshipType role={role} />
              ) : (
                <NotFound />
              )
            }
          />

          {/* BO - Ressources */}
          <Route
            exact
            path="/admin/categories"
            render={(props) =>
              adminGereRessources ? (
                <AdminHandleRessources role={role} />
              ) : (
                <NotFound />
              )
            }
          />

          {/* BO - Motifs de ban */}
          <Route
            exact
            path="/admin/reports-reasons"
            render={(props) =>
              adminGereRessources ? (
                <AdminHandleReportReason role={role} />
              ) : (
                <NotFound />
              )
            }
          />

          {/* BO - Banissements */}
          <Route
            exact
            path="/admin/reports"
            render={(props) =>
              adminGereRessources ? (
                <AdminHandlePunishement role={role} />
              ) : (
                <NotFound />
              )
            }
          />

          {/* BO - Commentaires */}
          <Route
          exact
          path="/admin/comments"
          render={(props) =>
              manageComments ? (
              <AdminHandleComment role={role}/>
              ) : (
                  <NotFound/>
              )
          }
        />

          {/* DOC - Visiteur */}
          <Route
            exact
            path="/documentation/visitor"
            render={(props) => <DocVisitor /> }
          />

          {/* DOC - Citoyen */}
          <Route
            exact
            path="/documentation/citizen"
            render={(props) => <DocCitizen /> }
          />

          {/* DOC - Modérateur */}
          <Route
            exact
            path="/documentation/moderator"
            render={(props) => <DocModerator /> }
          />

          {/* DOC - Administrateur */}
          <Route
            exact
            path="/documentation/admin"
            render={(props) => <DocAdmin /> }
          />

        <Route component={NotFound} />

        </Switch>
      
      </Container>
      <CookieBanner />

      <Footer />
      
    </>
  );
}

export default App;
