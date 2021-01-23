import React, { Component } from 'react';
import './Menu.css';
import MenuUser from './MenuUser/MenuUser';
import MenuRessources from './MenuRessources/MenuRessources';
import MenuBackOffice from './MenuBackOffice/MenuBackOffice';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeUser: false,
            activeRessource: true,
            activeBackOffice: false,
        }
        this.ToggleClass = this.ToggleClass.bind(this);
    }

    ToggleClass(text) {
        switch (text) {
            case 'user': 
                this.setState({
                    activeUser: true,
                    activeRessource: false,
                    activeBackOffice: false,
                })
                break
            case 'ressource':
                this.setState({
                    activeUser: false,
                    activeRessource: true,
                    activeBackOffice: false,
                })
                break
            case 'backoffice':
                this.setState({
                    activeUser: false,
                    activeRessource: false,
                    activeBackOffice: true,
                })
                break
            default:
                this.setState({
                    activeUser: false,
                    activeRessource: true,
                    activeBackOffice: false,
                })
                break
        }
    }

    render() {

        return (
            <Row className="main-menu">
                <Col md={2} className="navbar-menu">
                    <Row className="logo-navbar"><img src="/img/logo/logo_ressources_relationnelles_mini_menu.png" className="app-logo-navbar" alt="logo" /></Row>
                    <Row onClick={() => this.ToggleClass('user')} className={this.state.activeUser ? "active" : null}><i className="far fa-user"></i></Row>
                    <Row onClick={() => this.ToggleClass('ressource')} className={this.state.activeRessource ? "active" : null}><i className="far fa-file-alt"></i></Row>
                    <Row onClick={() => this.ToggleClass('backoffice')} className={this.state.activeBackOffice ? "active" : null}><i className="fas fa-sliders-h"></i></Row>
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
