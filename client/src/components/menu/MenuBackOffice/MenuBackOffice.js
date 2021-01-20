import React, { Component } from 'react';
import './MenuBackOffice.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class MenuBackOffice extends Component {
  
    render() {
        return (
            <Row className="back-office">
                <Col>

                    <h2>Back-Office</h2>
                    
                    <ul>
                        <li className="subtitle"><i class="fas fa-users-cog"></i> UTILISATEURS</li>
                        <li>Gérer les utilisateurs</li>
                    </ul>
                                
                    <ul>
                        <li className="subtitle"><i class="fas fa-folder-open"></i> RESSOURCES</li>
                        <li>Gérer les ressources</li>
                        <li>Gérer les catégories</li>
                        <li>Gérer les commentaires</li>
                    </ul>
                    
                    <ul>
                        <li className="subtitle"><i class="fas fa-info-circle"></i> DOCUMENTATION</li>
                        <li>Visiteur</li>
                        <li>Citoyen</li>
                        <li>Modérateurs</li>
                        <li>Administrateur</li>
                    </ul>

                </Col>
            </Row>
        );
    }
}
export default MenuBackOffice;