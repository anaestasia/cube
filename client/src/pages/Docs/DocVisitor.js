import React, { Component } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

import './Docs.css';


class DocVisitor extends Component {

    render() {
        return (
            <Row>
                <Col>
                    <div className="documentation">
                        <h1 className="doc-title">DOCUMENTATION VISITEUR</h1>

                        <div>
                            <p><h2>Lister les ressources</h2>
                            Pour accéder aux ressources, cliquez sur l’icône représentant un document dans le menu situé à gauche de l’écran. Vous aurez les ressources dernièrement ajoutées sur la partie supérieure de l’écran, la liste des ressources que vous pouvez consulter figure sur la partie droite.</p>

                            <p><h2>Filtrer et trier les ressources</h2>
                            Afin de filtrer et trier les ressources, Veuillez accéder à l’onglet ressource en cliquant sur l’icône de document sur le menu situé à gauche de l’écran, vous aurez ainsi accès aux filtres sur la partie centrale de l’écran. Les ressources sont alors filtrables par type et par relation ; les ressources filtrées et triées sont alors visibles sur la partie droite de l’écran.</p>

                            <p><h2>Afficher le contenu d’une ressource</h2>
                            Afin d’afficher le contenu d’une ressource, cliquer sur son titre, ce dernier sera en surbrillance.</p>

                            <p><h2>Création d’un compte citoyen</h2>
                            Sur la page d’accueil, cliquer sur « Se créer un compte »
                            Renseigner les informations personnelles puis cliquez sur « S’inscrire » 
                            Note : votre mot de passe doit contenir un minimum de 12 caractères.</p>

                            <p><h2>Afficher la documentation des visiteurs</h2>
                            Sur le menu situé à gauche de l’écran, cliquez sur la dernière icônes représentant des barres de réglages, sous la 3ème rubrique vous aurez accès à la documentation destinée aux visiteurs.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        );
    }
}
export default DocVisitor;