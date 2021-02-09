import React, { Component } from "react";
import "./Menu.css";
import MenuUser from "./MenuUser/MenuUser";
import MenuRessources from "./MenuRessources/MenuRessources";
import MenuBackOffice from "./MenuBackOffice/MenuBackOffice";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentActiveMenu: "ressource",
      user: {
          name : 'Tasia'
      },
    };
  }

  ToggleClass(text) {
        this.setState({
            currentActiveMenu: text
        })
    }

    Logout() {
        this.setState({
            user: null
        })
    }

  render() {
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

          <Row onClick={() => this.ToggleClass("user")}>
            <i className={ `far fa-user ${ this.state.currentActiveMenu === 'user' && 'activeTab' }` }></i>
          </Row>

          <Row onClick={() => this.ToggleClass("ressource")}>
            <i className={ `far fa-file-alt ${ this.state.currentActiveMenu === 'ressource' && 'activeTab' }` }></i>
          </Row>

          <Row onClick={() => this.ToggleClass("backoffice")}>
            <i className={ `fas fa-sliders-h ${ this.state.currentActiveMenu === 'backoffice' && 'activeTab' }` }></i>
          </Row>

        </Col>

        <Col xs={9} md={10} className="sub-menu">
          {this.state.currentActiveMenu === "ressource" ? (
            <MenuRessources />
          ) : this.state.currentActiveMenu === "user" ? (
            <MenuUser logout={ () => this.Logout() }/>
          ) : (
            <MenuBackOffice />
          )}
        </Col>
      </Row>
    );
  }
}

export default Menu;
