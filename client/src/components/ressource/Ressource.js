import React, { Component } from 'react';
import './Ressource.css';

class Ressource extends Component {
    
    render() {
        let catégorie = "Intelligence Émotionelle";
        let typeRelation = "Soi";
        let typeRessource = "Exercice / Atelier";
        return (
            <ul>
                <li> Reconnaître ses émotions <i class="fas fa-external-link-alt"></i>
                    <ul>
                        <li class="ressource-catégorie"> <i class="fas fa-folder-open"> </i> Catégorie : {catégorie}</li>
                        <li class="ressource-type-relation"> <i class="fas fa-users"></i> Type(s) de relation : {typeRelation} </li>
                        <li class="ressource-type-ressource"> <i class="fas fa-file-alt"></i> Type(s) de ressource : {typeRessource} </li>
                    </ul>
                </li>
            </ul>
        );
    }
}


export default Ressource;