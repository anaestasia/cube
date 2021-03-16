import React from "react";

import './vignetteRessource.css';

    export default function VignetteLastRessource({titre , idRessource , nombreLike , categorie , typeRelation , typeRessource , nb_consultation}){
        const lienRessource = "/ressource/"+idRessource
        return (
            <div className="vignette-ressource-container">

                <h3><a href={lienRessource} >{titre} <i className="fas fa-external-link-alt"></i></a></h3>
                
                <div className="icons-container">
                    <div className="views"><i class="fas fa-eye"></i> : {nb_consultation}</div>
                    <div className="likes"><i className="fas fa-thumbs-up"></i> : {nombreLike}</div>
                    <div className="options"><i className="far fa-heart"></i></div>
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

