import React, { useState , useEffect } from "react";
import "./Menu.css";
import MenuUser from "./MenuUser/MenuUser";
import MenuRessources from "./MenuRessources/MenuRessources";
import MenuBackOffice from "./MenuBackOffice/MenuBackOffice";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Axios from "axios";

export default function Menu({activeSubMenu , activeSubSubMenu }) {

  const [currentActiveMenu, setCurrentActiveMenu] = useState(activeSubMenu);

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

    return (
      <Row className="main-menu">
        <Col xs={3} md={2} className="navbar-menu">
        
          <Row className="logo-navbar">
            <img
              src="/img/logo/logo_ressources_relationnelles_mini_menu.png"
              className="app-logo-navbar"
              alt="logo"
            />            
          </Row>

          <Row onClick={() => setCurrentActiveMenu("user")}>
            <i className={ `far fa-user ${ currentActiveMenu === 'user' && 'activeTab' }` }></i>
          </Row>

          <Row onClick={() => setCurrentActiveMenu("ressource")}>
            <i className={ `far fa-file-alt ${ currentActiveMenu === 'ressource' && 'activeTab' }` }></i>
          </Row>

          <Row onClick={() => setCurrentActiveMenu("backoffice")}>
            <i className={ `fas fa-sliders-h ${ currentActiveMenu === 'backoffice' && 'activeTab' }` }></i>
          </Row>

        </Col>

        <Col xs={9} md={10} className="sub-menu">
          {currentActiveMenu === "ressource" ? (
            <MenuRessources role={role} activeSubSubMenu={activeSubSubMenu}/>
          ) : currentActiveMenu === "user" ? (
            <MenuUser role={role} activeSubSubMenu={activeSubSubMenu}/>
          ) : (
            <MenuBackOffice role={role} activeSubSubMenu={activeSubSubMenu}/>
          )}
        </Col>
      </Row>
    );
}