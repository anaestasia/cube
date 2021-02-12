import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MenuBackOffice({role}) {

    return (
        <Row className={`back-office ${"active"}`}>
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
                    {role === 1 ? 
                        <li className="link"><span>Citoyen non connecté</span></li> 
                    :
                    role === 2 ? 
                        <><li className="link"><span>Citoyen non connecté</span></li> 
                        <li className="link"><span>Citoyen</span></li></> 
                    :
                    role === 3 ? 
                        <><li className="link"><span>Citoyen non connecté</span></li> 
                        <li className="link"><span>Citoyen</span></li>
                        <li className="link"><span>Modérateurs</span></li></>
                    :
                        <><li className="link"><span>Citoyen non connecté</span></li> 
                        <li className="link"><span>Citoyen</span></li>
                        <li className="link"><span>Modérateurs</span></li>
                        <li className="link"><span>Administrateur</span></li></>
                    }
                </ul>

            </Col>
        </Row>
    );
}