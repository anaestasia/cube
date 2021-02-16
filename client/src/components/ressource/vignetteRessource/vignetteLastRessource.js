import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './vignetteRessource.css';

    export default function VignetteLastRessource({titre , idRessource , nombreLike , categorie , typeRelation , typeRessource , nb_consultation}){
        const lienRessource = "/ressource/"+idRessource
        return (
            <div className="vignette-ressource-container">
                <Col xl={12}>
                    <h2>{titre} <a href={lienRessource} ><i class="fas fa-external-link-alt"></i></a></h2>
                </Col>
                <Col xl={12} className="btns-vignette">
                    <span><i class="fas fa-thumbs-up"></i> {nombreLike} </span>
                    <span><i class="fas fa-ellipsis-v"></i><i class="far fa-heart"></i><i class="fas fa-reply"></i></span>
                    <span> vu : {nb_consultation}</span>
                </Col>
                <ul>
                    <li class="ressource-categorie"> <i class="fas fa-folder-open"> </i> Catégorie : {categorie} </li>
                    <li class="ressource-type-relation"> <i class="fas fa-users"></i> Type(s) de relation : {typeRelation} </li>
                    <li class="ressource-type-ressource"> <i class="fas fa-file-alt"></i> Type(s) de ressource : {typeRessource} </li>
                </ul>
                <div className="description"></div>
            </div>
        );
    }

