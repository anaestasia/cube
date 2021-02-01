import React, { useState , useEffect } from "react";
import Axios from "axios";
import "../App.css";
import { Link } from 'react-router-dom';
import SubmitBtn from "../components/form/SubmitBtn/SubmitBtn";
// import MultipleSelector from "../components/button/multipleselector/MultipleSelector";
import '@ckeditor/ckeditor5-build-classic/build/translations/fr.js';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

export default function FormRessource() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const [statusDB, setStatusDB] = useState([]);

  // const [typeRessource, setTypeRessource] = useState("");
  // const [relationshipRessource, setRelationshipRessource] = useState("");
  
  const [submitRessourceStatus, setSubmitRessourceStatus] = useState("");
  
  Axios.defaults.withCredentials = true;

  const submitRessource = event => {
    event.preventDefault();
    if(title.trim() !== '' && content.trim() !== '' && status!== "")
    {
      const date = new Date();
      const sqlDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+(date.getHours())+":"+date.getMinutes()+":"+date.getSeconds();
        Axios.post(process.env.REACT_APP_SITE_URL_API+"/ressources/create", {
          title: title,
          content: content,
          nb_consultation: 0,
          nb_like: 0,
          approved : false,
          archived : false,
          date_creation: sqlDate,//mettre date now en js	
          date_edition: sqlDate,//mettre date now en js
          deleted	: false,
          fk_type_ressource: 1,
          fk_relationship_ressource: 1,
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
  };

  useEffect(() => 
  {
    Axios.get(process.env.REACT_APP_SITE_URL_API+"/status/get").then((response) => {
        setStatusDB(response.data);
        console.log(response.data)
    });
  }, []);

  const optionSelectStatus = statusDB.map((st) =>
  <option  key={st.id} value={st.id}> {st.name} </option>
);

const handleCkeditorState = (event,editor) => {
  const data = editor.getData();
  setContent(data);
  // console.log(Ckeditor);
}

  return (
    <div className="App">
      <div className="formRessource">
        <h1>Soumettre une ressource</h1>
        <form onSubmit={submitRessource}>

          <label>Titre :</label>
          <input type="text" onChange={(e) => {setTitle(e.target.value); }} required/>
          <br />
          <label> Contenu :</label>
          <CKEditor 
              editor={ClassicEditor}
              data={content}
              onChange={handleCkeditorState}
              config={ {
                language: 'fr',
              } }
            />
          {/* <div className="type-ressource">
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
            {/* <MultipleSelector /> */}
          {/* </div> */}
          <br />
          <select name="catégorie-ressource" id="catégorie-ressource" required onChange={(e) => {setStatus(e.target.value); }}>
            <option disabled selected>--Sélectionner le statut--</option>
            {optionSelectStatus}
          </select>
          <select multiple={true} >
            <option value='B'>test</option>
            <option value='C'>test</option>
            <option>test</option>
          </select>
          <SubmitBtn inputText="Envoyer" />
          <Link to="/"> retour</Link>
{/* ajouter le choix de catégorie d'une ressource */}
        </form>
      <h1>{submitRessourceStatus}</h1>
        
      </div>

    </div>
  );
}
