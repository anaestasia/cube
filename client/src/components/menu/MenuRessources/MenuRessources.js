import React, { Component } from 'react';
import './MenuRessources.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class MenuRessources extends Component {
  
    render() {
        return (
            <Row className={`ressource ${this.props.active}`}>
                <Col>
                    <h2>Ressources</h2>
                    <ul>
                        <li className="subtitle"><span><i className="fas fa-folder-open"></i> RESSOURCES</span></li>
                        <li className="link"><span>Créer une ressource</span></li>
                        <li className="link"><span>Consulter le catalogue</span></li>
                    </ul>
                </Col>
            </Row>
        );
    }
}
export default MenuRessources;