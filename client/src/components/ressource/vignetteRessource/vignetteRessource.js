import React, { useState , useEffect } from "react";
import '@ckeditor/ckeditor5-build-classic/build/translations/fr.js';


    export default function VignetteRessource(){


        return (
            <div className="vignette-ressource-container">
                <div>
                    <h2>Titre <i class="fas fa-external-link-alt"></i></h2>
                    <span><i class="fas fa-thumbs-up"></i> 12</span>
                    <span><i class="fas fa-ellipsis-v"></i><i class="far fa-heart"></i><i class="fas fa-reply"></i></span>
                </div>
                <ul>
                    <li class="ressource-categorie"> <i class="fas fa-folder-open"> </i> Catégorie : </li>
                    <li class="ressource-type-relation"> <i class="fas fa-users"></i> Type(s) de relation :  </li>
                    <li class="ressource-type-ressource"> <i class="fas fa-file-alt"></i> Type(s) de ressource :  </li>
                </ul>
                <div className="description"></div>
            </div>
        );
    }

