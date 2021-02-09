import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class MenuUser extends Component {
  
    render() {
        return (
            <Row className={`profil-handler ${this.props.active}`}>
                <Col>
                    <h2>Gestion du Profil</h2>
                    <ul>
                        <li className="subtitle"><span><i class="fas fa-tachometer-alt"></i> TABLEAU DE BORD</span></li>
                        <li className="link"><Link to={'/my-ressources'}><span>Mes ressources</span></Link></li>
                        <li className="link"><Link to={'/my-favorites'}><span>Mes favoris</span></Link></li>
                    </ul>

                    <ul>
                        <li className="subtitle"><span><i class="fas fa-user-cog"></i> MON PROFIL</span></li>
                        <li className="link"><Link to={'/profile'}><span>Modifier mon profil</span></Link></li>
                        <li class="link logout" onClick={ this.props.logout }><span>Déconnexion</span></li>
                    </ul>
                </Col>
            </Row>
        );
    }
}
export default MenuUser;