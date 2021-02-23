import React from "react";
import Col from 'react-bootstrap/Col';

import './vignetteRessource.css';

    export default function VignetteLastRessource({titre , idRessource , nombreLike , categorie , typeRelation , typeRessource , nb_consultation}){
        const lienRessource = "/ressource/"+idRessource
        return (
            <div className="vignette-ressource-container">
                <Col xl={12}>
                    <h2>{titre} <a href={lienRessource} ><i className="fas fa-external-link-alt"></i></a></h2>
                </Col>
                <Col xl={12} className="btns-vignette">
                    <span><i className="fas fa-thumbs-up"></i> {nombreLike} </span>
                    <span><i className="fas fa-ellipsis-v"></i><i className="far fa-heart"></i><i className="fas fa-reply"></i></span>
                    <span> vu : {nb_consultation}</span>
                </Col>
                <ul>
                    <li className="ressource-categorie"> <i className="fas fa-folder-open"> </i> Catégorie : {categorie} </li>
                    <li className="ressource-type-relation"> <i className="fas fa-users"></i> Type(s) de relation : {typeRelation} </li>
                    <li className="ressource-type-ressource"> <i className="fas fa-file-alt"></i> Type(s) de ressource : {typeRessource} </li>
                </ul>
                <div className="description"></div>
            </div>
        );
    }

