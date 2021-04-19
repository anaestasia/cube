import React, { Component } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import logo from './img/logo_mini_ressources_relationnelles_tranparent.png';

import './Footer.css';
import { Link } from "react-router-dom";


class Footer extends Component {

    render() {
        return (
            <Row className="footer">

                <Col md={2} className="logo-footer"><img src= {logo} className="img-logo-footer" alt="logo" /></Col>

                <Col md={8} className="presentation">
                    <span className="slogan">La plateforme pour améliorer vos relations</span>
                    <span>(RE)Sources Relationnelles est une plateforme d’échange entre citoyens et de consultation de ressources.</span>
                    <span className="copyright">©ressourcesrelationnelles.com - Tous droits réservés</span>
                </Col>

                <Col md={2} className="services">
                    <h3>Services</h3>
                    <ul>
                        <li className="footer-link"><Link to="/legal-notice">Mentions légales</Link></li>
                        <li className="footer-link"><Link to="/legal-notice">Contactez-nous</Link></li>
                    </ul>
                </Col>

            </Row>
        );
    }
}
export default Footer;