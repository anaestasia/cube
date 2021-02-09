import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class MenuRessources extends Component {
  
    render() {
        return (
            <Row>
                <Col>
                    <h2>Ressources</h2>
                    <ul>
                        <li className="subtitle"><span><i className="fas fa-folder-open"></i> RESSOURCES</span></li>
                        <li className="link"><Link to={'/submit-ressource'}><span>Créer une ressource</span></Link></li>
                        <li className="link"><Link to={'/catalog'}><span>Consulter le catalogue</span></Link></li>
                    </ul>
                </Col>
            </Row>
        );
    }
}
export default MenuRessources;