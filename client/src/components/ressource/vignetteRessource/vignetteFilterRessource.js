import React from "react";
import './vignetteRessource.css';

    export default function vignetteFilterRessource({titre , idRessource , nombreLike , categorie , typeRelation , typeRessource , nb_consultation}){
        const lienRessource = "/ressource/"+idRessource
        return (
            <div className="vignette-ressource-container">
                <div>
                    <h2>{titre} <a href={lienRessource} ><i className="fas fa-external-link-alt"></i></a></h2>
                    <span><i className="fas fa-thumbs-up"></i> {nombreLike} </span>
                    <span><i className="fas fa-ellipsis-v"></i><i className="far fa-heart"></i><i className="fas fa-reply"></i></span>
                    <span> vu : {nb_consultation}</span>
                </div>
                <ul>
                    <li className="ressource-categorie"> <i className="fas fa-folder-open"> </i> Catégorie : {categorie} </li>
                    <li className="ressource-type-relation"> <i className="fas fa-users"></i> Type(s) de relation : {typeRelation} </li>
                    <li className="ressource-type-ressource"> <i className="fas fa-file-alt"></i> Type(s) de ressource : {typeRessource} </li>
                </ul>
                <div className="description"></div>
            </div>
        );
    }

