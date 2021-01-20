import React, { Component } from 'react';
import './Ressource.css';

class Ressource extends Component {

    constructor (props) {
        super(props);
        this.state = {
            title: "",
            categorie: "",
            typeRelation: "",
            typeRessource: "",
            content: "",
            media: "",
        };
    }

    render() {
        let categorie = "Intelligence Émotionelle";
        let typeRelation = "Soi";
        let typeRessource = "Exercice / Atelier";
        return (
            <div className="ressource-container">
                <h2>{this.props.title}<i class="fas fa-external-link-alt"></i></h2>
                <span><i class="fas fa-ellipsis-v"></i><i class="far fa-heart"></i><i class="fas fa-reply"></i></span>
                <ul>
                    <li class="ressource-categorie"> <i class="fas fa-folder-open"> </i> Catégorie : {this.props.categorie}</li>
                    <li class="ressource-type-relation"> <i class="fas fa-users"></i> Type(s) de relation : {this.props.typeRelation} </li>
                    <li class="ressource-type-ressource"> <i class="fas fa-file-alt"></i> Type(s) de ressource : {this.props.typeRessource} </li>
                </ul>
        <div className="ressource-content">{this.props.content}</div>
            </div>
        );
    }
}


export default Ressource;