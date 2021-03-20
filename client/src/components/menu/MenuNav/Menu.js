import React, { useState } from "react";
import "./Menu.css";
import MenuUser from "./SubMenuNav/MenuUser";
import MenuRessources from "./SubMenuNav/MenuRessources";
import MenuBackOffice from "./SubMenuNav/MenuBackOffice";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Menu({activeSubMenu , activeSubSubMenu , handleToggleMenu, openMenu, apiRole }) {

  const [activeMenu, setActiveMenu] = useState(activeSubMenu);

  const onClick = handleToggleMenu;

  const toggleTab = (activeMenu) =>
  {
    setActiveMenu(activeMenu);
  }

    return (

        <Row className={ `main-menu ${ openMenu === true && 'menu-open' }` }>

          <Col sm={3} md={2} className="navbar-menu">

            <div className="icon-tab" onClick={ onClick }>
              <i className="fas fa-bars"></i>
            </div>

            <div className="icon-tab" onClick={() => toggleTab("user")}>
              <i className={ `far fa-user ${ activeMenu === 'user' && 'activeTab' }` }></i>
            </div>

            <div className="icon-tab" onClick={() => toggleTab("ressource")}>
              <i className={ `far fa-file-alt ${ activeMenu === 'ressource' && 'activeTab' }` }></i>
            </div>

            <div className="icon-tab" onClick={() => toggleTab("backoffice") }>
              <i className={ `fas fa-sliders-h ${ activeMenu === 'backoffice' && 'activeTab' }` }></i>
            </div>

            <div className="icon-tab logo-navbar">
              <img
                src="/img/logo/logo_ressources_relationnelles_mini_menu.png"
                className="app-logo-navbar"
                alt="logo"
              />            
            </div>
          </Col>

          {openMenu === true ? (

            <Col xs={9} md={10} className="sub-menu">
              {activeMenu === "ressource" ? (
                <MenuRessources role={apiRole} activeSubSubMenu={activeSubSubMenu}/>
              ) : activeMenu === "user" ? (
                <MenuUser role={apiRole} activeSubSubMenu={activeSubSubMenu}/>
              ) : (
                <MenuBackOffice role={apiRole} activeSubSubMenu={activeSubSubMenu}/>
              )}
            </Col>

          ) : (
            <></>
          )}
              
        </Row>
    );
}