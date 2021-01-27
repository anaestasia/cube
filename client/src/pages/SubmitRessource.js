import React, { useState } from "react";
import Axios from "axios";
import "../App.css";
import { Link } from 'react-router-dom';
import SubmitBtn from "../components/form/SubmitBtn/SubmitBtn";
import MultipleSelector from "../components/button/multipleselector/MultipleSelector";


export default function FormRessource() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  //  const [nbConsultation, setNbConsultation] = useState(""); à ajouter par le futur (pas sûr mdr)
  //  const [nbLike, setNbLike] = useState("");
  //  const [approved, setApproved] = useState("");
  //  const [archived, setArchived] = useState("");
  const [typeRessource, setTypeRessource] = useState("");
  const [relationshipRessource, setRelationshipRessource] = useState("");
  const [status, setStatus] = useState("");
  
  
  const [submitRessourceStatus, setSubmitRessourceStatus] = useState("");
  
  Axios.defaults.withCredentials = true;

  const submitRessource = event => {
    event.preventDefault();
    if(title.trim() !== '' && content.trim() !== '' )
    {
      const date = new Date();
      const sqlDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
      if(title != ''){
        Axios.post(process.env.REACT_APP_SITE_URL_API+"/ressource/create", {
          title: title,
          content: content,
          nb_consultation: 0,
          nb_like: 0,
          approved : false,
          archived : false,
          date_creation: sqlDate,//mettre date now en js	
          date_edition: sqlDate,//mettre date now en js
          deleted	: false,
          fk_type_ressource: typeRessource,
          fk_relationship_ressource: relationshipRessource,
          fk_status: status,
        }).then((response) => {
          console.log(response);
          setSubmitRessourceStatus(response.data.message);
          //window.location.href = "/";
        });
    }
      else
      {
        setSubmitRessourceStatus('Veuillez remplir tout les champs');
      }
    }
    else
    {
        window.location.href = "/ressource/";//rajouter l'id de la ressource
    }
  };


  return (
    <div className="App">
      <div className="formRessource">
        <h1>Soumettre une ressource</h1>
        <form onSubmit={submitRessource}>

          <label>Titre :</label>
          <input type="text" onChange={(e) => {setTitle(e.target.value); }} required/>
          <br />
          <label> Contenu :</label>
          <textarea onChange={(e) => {setContent(e.target.value); }} required></textarea>
          <div className="type-ressource">
            <select name="typeRessource" id="typeRessource">
              <option value="">--Sélectionner le type de ressource--</option>
              <option value="article"> Article</option>
              <option value="activité-jeu"> Activité / Jeu</option>
              <option value="carte-défi"> Carte défi</option>
              <option value="cours-pdf"> Cours au format PDF</option>
              <option value="exercice-atelier"> Exercice / Atelier</option>
              <option value="fiche-de-lecture"> Fiche de lecture</option>
              <option value="jeu-en-ligne"> Jeu en Ligne</option>
              <option value="vidéo"> Vidéo</option>
            </select>
            {/*<select name="catégorie-ressource" id="catégorie-ressource">
                    <option value="">--Sélectionner la catégorie--</option>
                    <option value="intelligenceemotionelle"> intelligence Emotionelle</option>
                    <option value="mondeprofessionel"> Monde Professionel</option>
                    <option value="communication"> Communicaton </option>
            </select>*/}
          <MultipleSelector />
          </div>
          <SubmitBtn inputText="Envoyer" />
          <Link to="/"> retour</Link>

        </form>
      <h1>{submitRessourceStatus}</h1>
        
      </div>

    </div>
  );
}
