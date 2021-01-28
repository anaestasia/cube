import React, { Component } from 'react';
import './MenuUser.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class MenuUser extends Component {
  
    render() {
        return (
            <Row className={`profil-handler ${this.props.active}`}>
                <Col>
                    <h2>Gestion du Profil</h2>
                    <ul>
                        <li className="subtitle"><span><i class="fas fa-tachometer-alt"></i> TABLEAU DE BORD</span></li>
                        <li className="link"><span>Mes ressources</span></li>
                        <li className="link"><span>Mes favoris</span></li>
                    </ul>

                    <ul>
                        <li className="subtitle"><span><i class="fas fa-user-cog"></i> MON PROFIL</span></li>
                        <li className="link"><span>Modifier mon profil</span></li>
                        <li class="link logout"><span>Déconnexion</span></li>
                    </ul>
                </Col>
            </Row>
        );
    }
}
export default MenuUser;