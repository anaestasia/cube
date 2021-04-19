import React, { Component } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

import './Docs.css';


class DocCitizen extends Component {

    render() {
        return (
            <Row>
                <Col>
                    <div className="documentation">
                        <h1 className="doc-title">DOCUMENTATION CITOYEN</h1>

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

                            <p><h2>Afficher la documentation des visiteurs et des citoyens</h2>
                            Sur le menu situé à gauche de l’écran, cliquez sur la dernière icônes représentant des barres de réglages, sous la 3ème rubrique vous aurez accès accès aux différentes documentations.</p>

                            <p><h2>Création / édition d’une ressource</h2>
                            Sur le menu situé à gauche de l’écran, cliquez sur l’icône représentant un document et sélectionnez « Créer une ressource ».</p>

                            <p><span className="later">A venir</span> <h2>Partage d’une publication</h2>
                            Cliquez sur le coin supérieur droit d’un commentaire et sélectionner « Partager » au sein du menu déroulant. Le lien sera automatiquement copié vers votre presse-papier, vous aurez ainsi la possibilité d’envoyer le lien à votre liste de contact via la messagerie ou le poster sur divers réseaux sociaux/mails.</p>

                            <p><h2>Ajout d’un commentaire sur une ressource</h2>
                            Cliquez sur le coin supérieur droit d’un commentaire et sélectionner « Commenter » au sein du menu déroulant.</p>

                            <p><h2>Réponse à un commentaire</h2>
                            Cliquer sur la partie supérieur droite du commentaire et sélectionner « répondre » au sein du menu déroulant ouvert.</p>

                            <p><h2>Ajouter une ressource de ses favoris <span className="later">A venir</span></h2>
                            Cliquez sur l’icône en forme de coeur sur le coin supérieur droit de la ressource. Si cette dernière est pleine, la ressource est déjà en favoris.</p>

                            <p><h2>Retirer une ressource de ses favoris <span className="later">A venir</span></h2>
                            Dans la rubrique tableau de bord, sélectionnez "Mes favoris" puis cliquez sur le coeur situé à gauche de la ressource concernée.</p>

                            <p><h2>Indiquer une ressource comme exploitée / non exploitée <span className="later">A venir</span></h2>
                            Dans le cas ou la couleur du titre de la ressource est ternie, cela signifie que la ressource à déjà été consultée.</p>

                            <p><h2>Démarrer une ressource de type activité / jeu <span className="later">A venir</span></h2>
                            Pour accéder aux ressources de type jeu, cliquez sur l’icône représentant un document dans le menu situé à gauche de l’écran. Filtrez les ressources par type afin d’afficher les ressource de type Activité/Jeu puis sélectionner par un clic sur le titre.</p>

                            <p><h2>Inviter des participants <span className="later">A venir</span></h2>
                            Une fois la ressource choisie, cliquez sur « Inviter des participants ». Sélectionnez des utilisateurs parmi votre liste de contact.</p>

                            <p><h2>Échanger des messages dans le cadre de la ressource avec les autres participants <span className="later">A venir</span></h2>
                            Une fois la ressource activité jeu lancée, une conversation contenant uniquement les participants de l’activité apparait sur la partie inférieure droite de l’écran, cliquer sur la partie inférieure puis entrez votre message.</p>

                        </div>
                    </div>
                </Col>
            </Row>
        );
    }
}
export default DocCitizen;