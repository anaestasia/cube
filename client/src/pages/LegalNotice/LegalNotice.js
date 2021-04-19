import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './LegalNotice.css';

export default function LegalNotice() {

    return (
        <Row className="legal-notice">

            <Col xl={12}>
                <h1 className="doc-title">MENTIONS LÉGALES</h1>
            
                <p><strong>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l’économie numérique, il est précisé aux utilisateurs du site ressourcesrelationelles.fr l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</strong></p>

                <p><h2>Production du site</h2>
                Le site ressourcesrelationelles.fr est une production de la société Humanidev, société par actions simplifiée d'un capital de 66.666 euros.<br></br>
                Son siège social est situé au 36 rue du CESI, 5920/20 PITIE, immatriculée au registre du commerce et des sociétés sous le numéro d’identification unique 123 456 789 RCS Paris.</p>

                <p><h2>Responsable de publication</h2>
                Ministère des Solidarités et de la Santé</p>

                <p><h2>Hébergeur</h2>
                Le site ressourcesrelationelles.fr est hébergé par la société OVHcloud.<br></br>
                Située au : 11 Parvis Rotterdam, Tour Lille Europe, 59777 Euralille<br></br>
                L'intégralité des données stockées par l'hébergeur sont soumises au Règlement Général sur la protection des données conformément au Parlement Européen et au Conseil du 27 avril 2016 relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et à la libre circulation de ces données.<br></br>
                Le stockage des données personnelles des Utilisateurs est exclusivement réalisé sur les centres de données (« clusters ») localisés dans des états membres de l’Union Européenne de la société OVH.</p>

                <p><h2>Nous contacter</h2>
                Par Courrier : 123 rue de la Bienfaisance, 75008 Paris</p> 

                <p><h2>CNIL</h2>
                La société HumaniDev a fait l’objet d’une déclaration à la CNIL sous le numéro 21547698.<br></br>
                Suite aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, Chaque utilisateur dispose d’un droit d’accès, de rectification et/ou de suppression des informations collectées par HumaniDev & Le Ministère des Solidarités et de la Santé. Si besoin d'exercer ce droit, il suffit à l’utilisateur d’envoyer un message à l’adresse suivante : supportressourcerelationelles@humanidev.fr</p>
            </Col>
        
        </Row>    
    );
}