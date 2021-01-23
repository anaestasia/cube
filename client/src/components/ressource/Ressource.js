import React, { useState , useEffect } from "react";
import { useParams } from 'react-router-dom';
import Axios from "axios";

import './Ressource.css';

    export default function Ressource(){
        
        const { id } = useParams();
        const [categorie, setCategorie] = useState("");
        const [typeRelation, setTypeRelation] = useState("");
        const [typeRessource, setTypeRessource] = useState("");
        const [message, setMessage] = useState("");
        const [title, setTitle] = useState("");
        const [nbLike, setNbLike] = useState("");
        
        Axios.defaults.withCredentials = true;

        useEffect(() => 
        {
            const verifRole = (role) => {
                if (isNaN(id)) 
                {
                    window.location.href = "/404";
                }
                else
                {
                    Axios.post(process.env.REACT_APP_SITE_URL_API+"/ressources/getid", {
                        id: id,
                      }).then((response) => {
                        if (response.data.existe) {
                            if(response.data.result[0].namestatus === 'privée')
                            {
                                if(role >= 2)
                                {
                                    setCategorie(response.data.lesCategories);
                                    setTypeRelation(response.data.result[0].namerelationship);
                                    setTypeRessource(response.data.result[0].title);
                                    setMessage(response.data.result[0].content);  
                                    setTitle(response.data.result[0].title);
                                    setNbLike(response.data.result[0].nb_like);
                                }
                                else
                                {
                                   window.location.href = "/ressourcenonConnecte";
                                }
                                //renvoyer sur une page veuillez vous connecté pour voir cette article 
                                //si la personne n'est pas connecté  
                            }
                            else //public 
                            {
                                setCategorie(response.data.lesCategories);
                                setTypeRelation(response.data.result[0].namerelationship);
                                setTypeRessource(response.data.result[0].title);
                                setMessage(response.data.result[0].content);  
                                setTitle(response.data.result[0].title);
                                setNbLike(response.data.result[0].nb_like);
                            }
                        }
                        else
                        {
                            window.location.href = "/main";
                        }
                      });
                }
            }
            
            Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/login").then((response) => {
                if (response.data.loggedIn === true) {
                  verifRole(response.data.user[0].fk_role);
                }
                else
                {
                    verifRole(0);

                }
              });
            
            
        }, [id]);

       

        return (
            <div className="ressource-container">
                <h2>{title} <i class="fas fa-external-link-alt"></i></h2>
                <span><i class="fas fa-ellipsis-v"></i>{nbLike}<i class="far fa-heart"></i><i class="fas fa-reply"></i></span>
                <ul>
                    <li class="ressource-categorie"> <i class="fas fa-folder-open"> </i> Catégorie : {categorie}</li>
                    <li class="ressource-type-relation"> <i class="fas fa-users"></i> Type(s) de relation : {typeRelation} </li>
                    <li class="ressource-type-ressource"> <i class="fas fa-file-alt"></i> Type(s) de ressource : {typeRessource} </li>
                </ul>
                <div className="ressource-content"> {message} </div>
            </div>
        );
    }

