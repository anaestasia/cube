import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Axios from "axios";

import Home from "./components/home/Home";
import Menu from "./components/menu/MenuNav/Menu";
import Footer from "./components/footer/Footer";
import RegisterForm from "./components/form/RegisterForm/RegisterForm";
import Catalog from "./components/Catalog/Catalog";
import Ressource from "./components/ressource/Ressource";
import Favorites from "./components/ressource/Favorites/Favorites";
import MyRessources from "./components/ressource/MyRessources/MyRessources";
import SubmitRessource from "./components/form/RessourceForm/RessourceForm";
import Profile from "./components/profile/Profile";
import RessourceNotConnected from "./components/ressource/RessourceNotConnected/RessourceNotConnected";
import Admin from "./components/admin/Admin";
import AdminApprovedRessources from "./components/admin/approvedRessources/ApprovedRessources";
import AdminGererRessources from "./components/admin/gererRessources/GererRessources"
import AdminGererTypeRessources from "./components/admin/gererTypeRessources/GererTypeRessources"
import AdminGererTypeRelationship from "./components/admin/gererTypeRelationship/GererTypeRelationship"
import AdminGererPunishement from "./components/admin/gererPunishement/GererPunishement"
import AdminGererLesRaisonsDesSignalements from "./components/admin/gererLesRaisonsDesSignalements/GererLesRaisonsDesSignalements"
import NoAccess from "./components/403/403";
import NotFound from "./components/404/404";
import Token from "./components/token/token";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./App.css";

require("dotenv").config();

function App() {
  const [openMenu, setOpenMenu] = useState(true);
  const [role, setRole] = useState("");// eslint-disable-next-line
  const [status, setStatus] = useState("2");
  const [lastRessources, setLastRessources] = useState([]);
  const [connected, setConnected] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password:''});
  

  const toggleMenu = () => {
    console.log("fonction toggleMenu");
    if (openMenu === true) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  };

  Axios.defaults.withCredentials = true;

  const handleLogin = (event) => {
    event.preventDefault();
    //console.log("App :" + loginForm.email + " " + loginForm.password);
    var hash = require("object-hash");
    const password = hash.sha1(loginForm.password);

    if (loginForm.email.trim() !== "") {

      Axios.post(process.env.REACT_APP_SITE_URL_API + "/users/login", {
        mail: loginForm.email,
        password: password,

      }).then((response) => {
        console.log(response.data)
        if (response.data.connecte) {
          console.log(response);
          console.log('response');
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
      console.log(response);
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
  }
  if (role >= 4) {
    // Admin
  }
  if (role >= 5) {
    // Super-Admin
  }
  return (
    <Router>
      <Switch>
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

        <Container fluid>
          <Row className="parent-row">
            <Col xl={3} className="col-menu menuFixe">
              <Menu
                activeSubMenu="ressource"
                activeSubSubMenu="catalog"
                handleToggleMenu={toggleMenu}
                openMenu={openMenu}
                apiRole={role}
              />
            </Col>

            <Col xl={9} className="col-content-page">
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

              {/* RESSOURCES */}

              <Route
                exact
                path="/submit-ressource"
                render={ (props) =>  (submitRessource ? <SubmitRessource /> : <NotFound /> ) }
              />
              <Route
                exact
                path="/ressource/:id"
                render={(props) => (ressource ? <Ressource /> : <NotFound />)}
              />
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

              {/* USER */}
              <Route
                exact
                path="/profile"
                render={(props) => (profile ? <Profile /> : <NoAccess />)}
              />
              <Route
                exact
                path="/my-ressources"
                render={(props) =>
                  myRessources ? <MyRessources /> : <NoAccess />
                }
              />
              <Route
                exact
                path="/my-favorites"
                render={(props) => (myFavorites ? <Favorites /> : <NoAccess />)}
              />

              <Route
                exact
                path="/register"
                render={(props) => (register ? <RegisterForm /> : <NoAccess />)}
              />
              <Route exact path="/token/:token" render={(props) => <Token />} />

              {/* BO */}
              <Route
                exact
                path="/admin"
                render={(props) => (admin ? <Admin /> : <NotFound />)}
              />
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
              <Route
                exact
                path="/admin/gererTypeRessources"
                render={(props) =>
                  adminGereRessources ? (
                    <AdminGererTypeRessources role={role} />
                  ) : (
                    <NotFound />
                  )
                }
              />
              <Route
                exact
                path="/admin/gererTypeRelationship"
                render={(props) =>
                  adminGereRessources ? (
                    <AdminGererTypeRelationship role={role} />
                  ) : (
                    <NotFound />
                  )
                }
              />
              <Route
                exact
                path="/admin/gererRessources"
                render={(props) =>
                  adminGereRessources ? (
                    <AdminGererRessources role={role} />
                  ) : (
                    <NotFound />
                  )
                }
              />
              <Route
                exact
                path="/admin/gererLesRaisons"
                render={(props) =>
                  adminGereRessources ? (
                    <AdminGererLesRaisonsDesSignalements role={role} />
                  ) : (
                    <NotFound />
                  )
                }
              />
              <Route
                exact
                path="/admin/gererPunishement"
                render={(props) =>
                  adminGereRessources ? (
                    <AdminGererPunishement role={role} />
                  ) : (
                    <NotFound />
                  )
                }
              />
            </Col>
          </Row>
          <Footer />
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
