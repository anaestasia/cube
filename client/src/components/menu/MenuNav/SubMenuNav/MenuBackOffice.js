import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import { Link } from 'react-router-dom';

export default function MenuBackOffice({role , activeSubSubMenu}) {

    return (
        <Row className={`back-office ${"active"}`}>
            <Col>

                <h2>Back-Office</h2>
                { role >= 4 ?
                <ul>
                    <li className="subtitle"><span><i className="fas fa-users-cog"></i> UTILISATEURS</span></li>
                    <li className="link"><span>Gérer les utilisateurs</span></li>
                </ul> : <></> 
                }

                { role >= 3 ?         
                <ul>
                    <li className="subtitle"><span><i className="fas fa-folder-open"></i> RESSOURCES</span></li>
                    <li className="link">
                        <Link to={'/admin/approvedRessources'}>
                            <span>Gérer les ressources</span>
                            {/* <span className={ activeSubSubMenu === 'approvedRessources' && 'activeSubTab' }>Gérer les ressources</span> */}
                        </Link>
                    </li>
                    <li className="link"><span>Gérer les catégories</span></li>
                    <li className="link"><span>Gérer les commentaires</span></li>
                </ul> : <></> 
                }
                <ul>
                    <li className="subtitle"><span><i className="fas fa-info-circle"></i> DOCUMENTATION</span></li>
                    <li className="link"><span>Visiteur</span></li>
                    {role >= 1 ? 
                        <li className="link"><span>Citoyen non connecté</span></li> 
                    : <></>}
                    {role >= 2 ? 
                        <li className="link"><span>Citoyen</span></li>
                    : <></>}
                    {role >= 3 ? 
                        <li className="link"><span>Modérateurs</span></li>
                    : <></>}
                    { role >= 4 ?  
                        <li className="link"><span>Administrateur</span></li>
                    : <></>}
                </ul>

            </Col>
        </Row>
    );
}