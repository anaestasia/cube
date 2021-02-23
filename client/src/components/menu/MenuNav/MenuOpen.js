import React, { useState , useEffect } from "react";
import "./Menu.css";
import MenuUser from "./SubMenuNav/MenuUser";
import MenuRessources from "./SubMenuNav/MenuRessources";
import MenuBackOffice from "./MenuBackOffice/MenuBackOffice";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Axios from "../MenuUser/node_modules/axios";

export default function MenuOpen({activeSubMenu , activeSubSubMenu }) {

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
      <Row className={ `main-menu ${ openMenu === true && 'menu-open' }` }>
        <Col xs={3} md={2} className="navbar-menu">

          <div className="icon-tab" onClick={() => toggleMenu()}>
            <i className="fas fa-bars"></i>
          </div>

          <div className="icon-tab" onClick={() => setCurrentActiveMenu("user")}>
            <i className={ `far fa-user ${ currentActiveMenu === 'user' && 'activeTab' }` }></i>
          </div>

          <div className="icon-tab" onClick={() => setCurrentActiveMenu("ressource")}>
            <i className={ `far fa-file-alt ${ currentActiveMenu === 'ressource' && 'activeTab' }` }></i>
          </div>

          <div className="icon-tab" onClick={() => setCurrentActiveMenu("backoffice")}>
            <i className={ `fas fa-sliders-h ${ currentActiveMenu === 'backoffice' && 'activeTab' }` }></i>
          </div>

          <div className="icon-tab" className="logo-navbar">
            <img
              src="/img/logo/logo_ressources_relationnelles_mini_menu.png"
              className="app-logo-navbar"
              alt="logo"
            />            
          </div>

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