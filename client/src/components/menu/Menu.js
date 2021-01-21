import React, { Component } from 'react';
import './Menu.css';
import MenuUser from './MenuUser/MenuUser';
import MenuRessources from './MenuRessources/MenuRessources';
import MenuBackOffice from './MenuBackOffice/MenuBackOffice';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Menu extends Component {

render() {
        return (
            <Row className="main-menu">
                <Col md={2} className="navbar-menu">
                    <Row className="logo-navbar"><img src="/img/logo/logo_ressources_relationnelles_mini_menu.png" className="app-logo-navbar" alt="logo" /></Row>
                    <Row><i className="far fa-user"></i></Row>
                    <Row><i className="far fa-file-alt"></i></Row>
                    <Row><i className="fas fa-sliders-h"></i></Row>
                </Col>

                <Col md={9} className="sub-menu">
                    <MenuUser />
                    <MenuRessources />
                    <MenuBackOffice />
                </Col>

            </Row>
        );
    }
}

export default Menu;