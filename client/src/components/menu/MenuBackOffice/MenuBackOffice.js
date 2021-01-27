import React, { Component } from 'react';
import './MenuBackOffice.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class MenuBackOffice extends Component {
    
    render() {
        return (
            <Row className={`back-office ${this.props.active}`}>
                <Col>

                    <h2>Back-Office</h2>
                    
                    <ul>
                        <li className="subtitle"><span><i class="fas fa-users-cog"></i> UTILISATEURS</span></li>
                        <li className="link"><span>Gérer les utilisateurs</span></li>
                    </ul>
                                
                    <ul>
                        <li className="subtitle"><span><i class="fas fa-folder-open"></i> RESSOURCES</span></li>
                        <li className="link"><span>Gérer les ressources</span></li>
                        <li className="link"><span>Gérer les catégories</span></li>
                        <li className="link"><span>Gérer les commentaires</span></li>
                    </ul>
                    
                    <ul>
                        <li className="subtitle"><span><i class="fas fa-info-circle"></i> DOCUMENTATION</span></li>
                        <li className="link"><span>Visiteur</span></li>
                        <li className="link"><span>Citoyen</span></li>
                        <li className="link"><span>Modérateurs</span></li>
                        <li className="link"><span>Administrateur</span></li>
                    </ul>

                </Col>
            </Row>
        );
    }
}
export default MenuBackOffice;