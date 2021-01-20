import React, { Component } from 'react';
import './MenuUser.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class MenuUser extends Component {
  
    render() {
        return (
            <Row className="profil-handler">
                <Col>
                    <h2>Gestion du Profil</h2>
                    <ul>
                        <li className="subtitle"><i class="fas fa-tachometer-alt"></i> TABLEAU DE BORD</li>
                        <li>Mes ressources</li>
                        <li>Mes favoris</li>
                    </ul>

                    <ul>
                        <li className="subtitle"><i class="fas fa-user-cog"></i> MON PROFIL</li>
                        <li>Modifier mon profil</li>
                        <li class="logout">Déconnexion</li>
                    </ul>
                </Col>
            </Row>
        );
    }
}
export default MenuUser;