import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'; 
import Axios from "axios";


export default function MenuUser({role , activeSubSubMenu }) {
  
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
                        <li className="subtitle"><span><i className="fas fa-user-cog"></i> MON PROFIL</span></li>
                            <li className="link"><Link to={'/'}><span>Se connecter</span></Link></li>
                            <li className="link"><Link to={'/register'}><span>S'inscrire</span></Link></li>
                        </ul> 
                        : <></>
                    }

                    {role=== 1 ?
                        <>
                        <ul>
                            <li className="subtitle"><span>Vérifie ton mail</span></li>
                        </ul> 
                        </> : <></>
                    }

                    {role>=2 ?
                        <>
                        <ul>
                            <li className="subtitle"><span><i className="fas fa-tachometer-alt"></i> TABLEAU DE BORD</span></li>
                            <li className="link">
                                <Link to={'/my-ressources'}>
                                    <span className={ activeSubSubMenu === 'MyRessource' && 'activeSubTab' }>Mes ressources</span>
                                </Link>
                            </li>
                            <li className="link">
                                <Link to={'/my-favorites'}>
                                    <span className={ activeSubSubMenu === "myFavorites" && 'activeSubTab' }>Mes favoris</span>
                                </Link>
                            </li>
                        </ul>
                        </>
                        : <></>
                    }

                    {role >=1 ?
                        <>
                        <ul>
                            <li className="subtitle"><span><i className="fas fa-user-cog"></i> MON PROFIL</span></li>
                            <li className="link">
                                <Link to={'/profile'}>
                                    <span className={ activeSubSubMenu === 'ModifierMonProfil' && 'activeSubTab' }>Modifier mon profil</span>
                                </Link>
                            </li>
                            <li className="link logout"><span className="logoutHover" onClick={ logout }>Déconnexion</span></li>
                        </ul>
                        </>
                        : <></>
                    }
                </Col>
            </Row>
        );
    }