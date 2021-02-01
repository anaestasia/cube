import React, { useState , useEffect } from "react";
import { useParams } from 'react-router-dom';
import Axios from "axios";
import Button from 'react-bootstrap/Button'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import '@ckeditor/ckeditor5-build-classic/build/translations/fr.js';
import Modal from 'react-bootstrap/Modal'

import './Ressource.css';

    export default function Ressource(){
        
        const { id } = useParams();

        const [show, setShow] = useState(false);

        const [contenuCommentsCkeditor, setContenuCommentsCkeditor] = useState("");

        const [idUserConnecte, setIdUserConnecte] = useState("");
        const [idUserAuteur, setIdUserAuteur] = useState("");
        const [role, setRole] = useState("");

        const [categorie, setCategorie] = useState("");
        const [typeRelation, setTypeRelation] = useState("");
        const [typeRessource, setTypeRessource] = useState("");
        const [message, setMessage] = useState("");
        const [title, setTitle] = useState("");
        const [nbLike, setNbLike] = useState("");
        const [auteur, setAuteur] = useState("");
        const [date_creation, setDate_creation] = useState("");
        const [date_edition, setDate_edition] = useState("");
        
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
                          console.log(response)
                        if (response.data.existe) {
                            if(response.data.result[0].namestatus === 'privée')
                            {
                                if(role >= 2)
                                {
                                    setCategorie(response.data.lesCategories);
                                    setTypeRelation(response.data.result[0].namerelationship);
                                    setTypeRessource(response.data.result[0].title);
                                    setMessage(response.data.result[0].content); 
                                    setContenuCommentsCkeditor(response.data.result[0].content);
                                    setTitle(response.data.result[0].title);
                                    setNbLike(response.data.result[0].nb_like);
                                    setDate_creation(response.data.result[0].date_creation);
                                    setDate_edition(response.data.result[0].date_edition);
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
                                setContenuCommentsCkeditor(response.data.result[0].content); 
                                setTitle(response.data.result[0].title);
                                setNbLike(response.data.result[0].nb_like);
                                setDate_creation(response.data.result[0].date_creation);
                                setDate_edition(response.data.result[0].date_edition);
                                setAuteur(response.data.user[0].lastname + " "+ response.data.user[0].firstname);
                                setIdUserAuteur(response.data.user[0].fk_user);
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
                  setIdUserConnecte(response.data.user[0].id);
                  setRole(response.data.user[0].fk_role);
                }
                else
                {
                    verifRole(0);
                }
              });
            
            
        }, [id]);

        const handleClose = () => setShow(false);

        const handleShow = (id) => {
            setShow(true)
          }

        const handleCkeditorState = (event,editor) => {
            const data = editor.getData();
            setContenuCommentsCkeditor(data);
          }
          
        const editRessource = () => 
        {
        //   content = req.body.content;
        // const id
            const date = new Date();
            const sqlDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+(date.getHours())+":"+date.getMinutes()+":"+date.getSeconds();

            Axios.post(process.env.REACT_APP_SITE_URL_API+"/ressources/editRessource", {
            id: id,
            content: contenuCommentsCkeditor,
            date_edition:sqlDate
            }).then((response) => {
                if(response.data.verif)
                {
                    setShow(false)
                    setMessage(contenuCommentsCkeditor);
                }
        });
        }


        return (
            <>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modifier ton commentaire </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <CKEditor 
                    editor={ClassicEditor}
                    data={contenuCommentsCkeditor}
                    onChange={handleCkeditorState}
                    config={ {
                        language: 'fr',
                    } }
                    />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    fermer
                </Button>
                <Button variant="warning" onClick={editRessource}>
                    Modifier
                </Button>
                </Modal.Footer>
            </Modal>

            <div className="ressource-container">
                <div>
                    <h2>{title} <i class="fas fa-external-link-alt"></i></h2>
                    <span><i class="fas fa-thumbs-up"></i> {nbLike}</span>
                    <span><i class="fas fa-ellipsis-v"></i><i class="far fa-heart"></i><i class="fas fa-reply"></i></span>
                </div>
                <ul>
                    <li class="ressource-categorie"> <i class="fas fa-folder-open"> </i> Catégorie : {categorie}</li>
                    <li class="ressource-type-relation"> <i class="fas fa-users"></i> Type(s) de relation : {typeRelation} </li>
                    <li class="ressource-type-ressource"> <i class="fas fa-file-alt"></i> Type(s) de ressource : {typeRessource} </li>
                </ul>
                <div className="content" dangerouslySetInnerHTML={{__html: message}}></div>
                <hr />
                    <div>Auteur : {auteur}</div>
                    <div>Date création : {date_creation.substring(8,10)}/{date_creation.substring(5,7)}/{date_creation.substring(0,4)} à {date_creation.substring(11,19)}</div>
                    {date_creation !== date_edition && <>Dernière modification : {date_edition.substring(8,10)}/{date_edition.substring(5,7)}/{date_edition.substring(0,4)} à {date_edition.substring(11,19)} <br /></> }
                    {(idUserConnecte === idUserAuteur || role >=3) && <Button variant="primary" onClick={() => {handleShow(id); }}> Edit </Button> }
            </div>
            </>
        );
    }

