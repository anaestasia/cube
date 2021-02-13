import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import Axios from "axios";


export default function MenuUser({role}) {
  
    const logout = () => 
    {
        Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/logout").then((response) => {
            if (response.data.destroy === true) {
            window.location.href = "/";
            }
        });
    }

        return (
            <Row className={`profil-handler ${"active"}`}>
                <Col>
                    <h2>Gestion du Profil </h2>
                    {role=== 0 ?
                        <ul>
                        <li className="subtitle"><span><i class="fas fa-user-cog"></i> MON PROFIL</span></li>
                            <li className="link"><Link to={'/'}><span>Se connecter</span></Link></li>
                            <li className="link"><Link to={'/register'}><span>S'inscrire</span></Link></li>
                        </ul> 
                        :
                    role=== 1 ?
                        <>
                        <ul>
                            <li className="subtitle"><span>Vérifie ton mail</span></li>
                        </ul> 
                        <ul>
                            <li className="subtitle"><span><i class="fas fa-user-cog"></i> MON PROFIL</span></li>
                            <li className="link"><Link to={'/profile'}><span>Modifier mon profil</span></Link></li>
                            <li class="link logout"><span className="logoutHover" onClick={ logout }>Déconnexion</span></li>
                        </ul>
                        </>
                        :
                        <>
                        <ul>
                            <li className="subtitle"><span><i class="fas fa-tachometer-alt"></i> TABLEAU DE BORD</span></li>
                            <li className="link"><Link to={'/my-ressources'}><span>Mes ressources</span></Link></li>
                            <li className="link"><Link to={'/my-favorites'}><span>Mes favoris</span></Link></li>
                        </ul>
                        <ul>
                            <li className="subtitle"><span><i class="fas fa-user-cog"></i> MON PROFIL</span></li>
                            <li className="link"><Link to={'/profile'}><span>Modifier mon profil</span></Link></li>
                            <li class="link logout"><span className="logoutHover" onClick={ logout }>Déconnexion</span></li>
                        </ul>
                        </>
                    }
                </Col>
            </Row>
        );
    }