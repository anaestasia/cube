import React, { Component } from 'react';
import './MenuRessources.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class MenuRessources extends Component {
  
    render() {
        return (
            <Row className="ressource">
                <Col>
                    <h2>Ressources</h2>
                    <ul>
                        <li className="subtitle"><i className="fas fa-folder-open"></i> RESSOURCES</li>
                        <li>Créer une ressource</li>
                        <li>Consulter le catalogue</li>
                    </ul>
                </Col>
            </Row>
        );
    }
}
export default MenuRessources;