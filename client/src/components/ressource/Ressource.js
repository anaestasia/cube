import React, { Component } from 'react';
import './Ressource.css';

class Ressource extends Component {

    render() {
        let categorie = "Intelligence Émotionelle";
        let typeRelation = "Soi";
        let typeRessource = "Exercice / Atelier";
        return (
            <div className="ressource-container">
                <h2>Reconnaître ses émotions <i class="fas fa-external-link-alt"></i></h2>
                <span><i class="fas fa-ellipsis-v"></i><i class="far fa-heart"></i><i class="fas fa-reply"></i></span>
                <ul>
                    <li class="ressource-categorie"> <i class="fas fa-folder-open"> </i> Catégorie : {categorie}</li>
                    <li class="ressource-type-relation"> <i class="fas fa-users"></i> Type(s) de relation : {typeRelation} </li>
                    <li class="ressource-type-ressource"> <i class="fas fa-file-alt"></i> Type(s) de ressource : {typeRessource} </li>
                </ul>
                <div className="ressource-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a est ante. Duis posuere luctus ullamcorper. Curabitur auctor lorem tristique lacus ornare, convallis rhoncus libero tempus. Suspendisse id orci non nisl ornare luctus. In hac habitasse platea dictumst. Nunc gravida eros et rutrum consequat. Mauris nisi nulla, luctus sit amet dictum venenatis, faucibus sit amet ligula. Mauris iaculis in lacus ac mattis. Phasellus finibus luctus tristique. Sed ac ipsum et tellus condimentum lacinia vel a ex. Donec laoreet varius felis, ac varius ligula.</div>
            </div>
        );
    }
}


export default Ressource;