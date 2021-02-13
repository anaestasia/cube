import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function MenuRessources({role , activeSubSubMenu}) {
    return (
        <Row>
            <Col>
                <h2>Ressources</h2>
                <ul>
                    <li className="subtitle"><span><i className="fas fa-folder-open"></i> RESSOURCES</span></li>
                    {role >= 2 ? 
                        <li className="link">
                            <Link to={'/submit-ressource'}><span>
                                {activeSubSubMenu === "submitRessource" ? <i class="fa  fa-hand-o-right"></i> : <></>}
                                {' '}Créer une ressource</span>
                            </Link>
                        </li>
                    : <></>} 
                    
                    <li className="link">
                        <Link to={'/catalog'}><span>
                            {activeSubSubMenu === "catalog" ? <i class="fa  fa-hand-o-right"></i> : <></>}
                            {' '}Consulter le catalogue</span>
                        </Link>
                    </li>
                </ul>
            </Col>
        </Row>
    );
}