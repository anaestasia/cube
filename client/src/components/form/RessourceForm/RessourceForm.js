import React, { useState , useEffect } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';



// import 'ckeditor5-cube'
// import ClassicEditor from 'ckeditor5-cube'
// import CKEditor from  'ckeditor5-cube'
// import '@ckeditor/ckeditor5-build-classic/build/translations/fr.js';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import { Multiselect } from 'multiselect-react-dropdown';

import SubmitBtn from "../../buttons/SubmitBtn/SubmitBtn";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import "./RessourceForm.css";

export default function RessourceForm() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [status, setStatus] = useState("");
  const [statusDB, setStatusDB] = useState([]);

  const [typesressources, setTypesressources] = useState("");
  const [typesressourcesDB, setTypesressourcesDB] = useState([]);

  const [relationshipRessource, setRelationshipRessource] = useState("");
  const [relationshipRessourceDB, setRelationshipRessourceDB] = useState([]);

  const [categories, setCategories] = useState("");// eslint-disable-next-line
  const [categoriesDB, setCategoriesDB] = useState([]);

  const [idUser, setIdUser] = useState("");
  
  const [submitRessourceStatus, setSubmitRessourceStatus] = useState("");
  
  Axios.defaults.withCredentials = true;

  const submitRessource = event => {
    event.preventDefault();
    if(title.trim() !== '' && content.trim() !== '' && status!== "" && typesressources !== "" && relationshipRessource !== '' && categories.length !== 0)
    {
      // setSubmitRessourceStatus(categories[0].name);

      const date = new Date();
      const sqlDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+(date.getHours())+":"+date.getMinutes()+":"+date.getSeconds();
        Axios.post(process.env.REACT_APP_SITE_URL_API+"/ressources/create", {
          title: title,
          content: content,
          nb_consultation: 0,
          nb_like: 0,
          approved : false, //repasser a false
          archived : false,
          date_creation: sqlDate,//mettre date now en js	
          date_edition: sqlDate,//mettre date now en js
          deleted	: false,
          fk_type_ressource: typesressources,
          fk_relationship_ressource: relationshipRessource,
          fk_status: status,
          idUser: idUser,
        }).then((response) => {

          console.log(response);
          setSubmitRessourceStatus(response.data);

          categories.forEach(element => {
            Axios.post(process.env.REACT_APP_SITE_URL_API+"/categoriesRessources/create2", {
            fk_categorie: element.id,
            date_creation: sqlDate,
            }) 
        });

          
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
        // console.log(response.data)
    });
    Axios.get(process.env.REACT_APP_SITE_URL_API+"/typesressources/get").then((response) => {
      setTypesressourcesDB(response.data);
      // console.log(response.data)
    });
    Axios.get(process.env.REACT_APP_SITE_URL_API+"/relationshipRessources/get").then((response) => {
      setRelationshipRessourceDB(response.data);
      // console.log(response.data)
    });
    Axios.get(process.env.REACT_APP_SITE_URL_API+"/categories/get").then((response) => {
      setCategoriesDB(response.data);
      // console.log(response.data)
    });
    
  
    Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/login").then((response) => {
      if (response.data.loggedIn === true) {
        setIdUser(response.data.user[0].id);
      }
    });
  }, []);

  const optionSelectStatus = statusDB.map((st) =>
  <option  key={st.id} value={st.id}> {st.name} </option>
);

const optionSelectTypeRessources = typesressourcesDB.map((st) =>
  <option  key={st.id} value={st.id}> {st.name} </option>
);

const optionSelectRelationshipRessourceDB = relationshipRessourceDB.map((st) =>
  <option  key={st.id} value={st.id}> {st.name} </option>
);
// eslint-disable-next-line
const handleCkeditorState = (event,editor) => {
  const data = editor.getData();
  setContent(data);
  // console.log(Ckeditor);
}
// eslint-disable-next-line
const onSelect = (selectedList, selectedItem) =>
{
  setCategories(selectedList)
  // selectedList.forEach(element => alert(element.name));
}
// eslint-disable-next-line
const onRemove = (selectedList, selectedItem) =>
{
  setCategories(selectedList)
  // selectedList.forEach(element => alert(element.name));
}

  return (
    <>
      <Row className="submit-ressource">
        <Col className="formRessource">

          <h1>Soumettre une ressource</h1>
          <form onSubmit={submitRessource}> 

            <input type="text" className="ressource-title" onChange={(e) => {setTitle(e.target.value); }} placeholder="Titre de la ressource" required/>

            {/* <CKEditor 
                editor={ClassicEditor}
                data={content}
                onChange={handleCkeditorState}
                config={ {
                  language: 'fr',
                } }
              /> */}

            {/* <Multiselect
              options={categoriesDB} // Options to display in the dropdown
              displayValue="name" // Property name to display in the dropdown options
              onSelect={onSelect}
              onRemove={onRemove} // Function will trigger on remove event
            /> */}

            <div className="select-inputs">
              <select name="type-ressource" id="type-ressource" required onChange={(e) => {setTypesressources(e.target.value); }}>
                <option disabled selected>-- Type de ressource --</option>
                {optionSelectTypeRessources}
              </select>

              <select name="relationship-ressource" id="relationship-ressource" required onChange={(e) => {setRelationshipRessource(e.target.value); }}>
                <option disabled selected>-- Type de relation --</option>
                {optionSelectRelationshipRessourceDB}
              </select>

              <select name="status-ressource" id="status-ressource" required onChange={(e) => {setStatus(e.target.value); }}>
                <option disabled selected>-- Statut --</option>
                {optionSelectStatus}
              </select>
            </div>

            <div className="btns">
              <Link to="/" className="cancel-btn">Annuler</Link>
              <SubmitBtn inputText="Envoyer" />
            </div>

          </form>

          <h1>{submitRessourceStatus}</h1>
          
        </Col>
      </Row>
    </>
    
  );
}
