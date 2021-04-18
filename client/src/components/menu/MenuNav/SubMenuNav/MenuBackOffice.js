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
                    <li className="link">
                        <Link to={'/admin/gererPunishement'}>
                            <span>Gérer les punitions</span>
                        </Link>
                    </li>
                </ul> : <></> 
                }

                { role >= 3 ?         
                <ul>
                    <li className="subtitle"><span><i className="fas fa-folder-open"></i> RESSOURCES</span></li>
                    <li className="link">
                        <Link to={'/admin/approvedRessources'}>
                            <span>Ressources à approuver</span>
                            {/* <span className={ activeSubSubMenu === 'approvedRessources' && 'activeSubTab' }>Gérer les ressources</span> */}
                        </Link>
                    </li>
                    <li className="link">
                        <Link to={'/admin/gererRessources'}>
                            <span>Gérer les catégories</span>
                        </Link>
                    </li>
                    <li className="link">
                        <Link to={'/admin/gererTypeRessources'}>
                            <span>Gérer les types de ressources</span>
                        </Link>
                    </li>
                    <li className="link">
                        <Link to={'/admin/gererTypeRelationship'}>
                            <span>Gérer les types de relation</span>
                        </Link>
                    </li>
                </ul> : <></> 
                }
                <ul>
                    <li className="subtitle"><span><i class="far fa-comments"></i> COMMENTAIRES</span></li>
                    <li className="link">
                        <Link to={'/manage/Comments'}>
                            <span>Gérer les commentaires</span>
                        </Link>
                    </li>
                    <li className="link">
                        <Link to={'/admin/gererLesRaisons'}>
                            <span>Gérer les raisons</span>
                        </Link>
                    </li>
                </ul>
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