import React, { useState , useEffect } from "react";
import Axios from "axios";
import "../App.css";
import { Link } from 'react-router-dom';
import SubmitBtn from "../components/form/SubmitBtn/SubmitBtn";
import '@ckeditor/ckeditor5-build-classic/build/translations/fr.js';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Multiselect } from 'multiselect-react-dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../components/menu/Menu';
import Footer from '../components/footer/Footer';

export default function FormRessource() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [status, setStatus] = useState("");
  const [statusDB, setStatusDB] = useState([]);

  const [typesressources, setTypesressources] = useState("");
  const [typesressourcesDB, setTypesressourcesDB] = useState([]);

  const [relationshipRessource, setRelationshipRessource] = useState("");
  const [relationshipRessourceDB, setRelationshipRessourceDB] = useState([]);

  const [categories, setCategories] = useState("");
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

const handleCkeditorState = (event,editor) => {
  const data = editor.getData();
  setContent(data);
  // console.log(Ckeditor);
}

const onSelect = (selectedList, selectedItem) =>
{
  setCategories(selectedList)
  // selectedList.forEach(element => alert(element.name));
}

const onRemove = (selectedList, selectedItem) =>
{
  setCategories(selectedList)
  // selectedList.forEach(element => alert(element.name));
}

  return (
    <Container fluid>
        <Row className="parent-row">
            <Col xl={3} className="col-menu">
                <Menu />
            </Col>

            <Col xl={9} className="col-content-page">
              <Row className="submit-ressource">
                <div className="formRessource">

                  <h1>Soumettre une ressource</h1>
                  <form onSubmit={submitRessource}> 

                    <label>Titre :</label>
                    <input type="text" onChange={(e) => {setTitle(e.target.value); }} required/>

                    <label> Contenu :</label>
                    <CKEditor 
                        editor={ClassicEditor}
                        data={content}
                        onChange={handleCkeditorState}
                        config={ {
                          language: 'fr',
                        } }
                      />

                    <Multiselect
                      options={categoriesDB} // Options to display in the dropdown
                      displayValue="name" // Property name to display in the dropdown options
                      onSelect={onSelect}
                      onRemove={onRemove} // Function will trigger on remove event
                    />

                    <select name="type-ressource" id="type-ressource" required onChange={(e) => {setTypesressources(e.target.value); }}>
                      <option disabled selected>--Sélectionner un type de ressource--</option>
                      {optionSelectTypeRessources}
                    </select>

                    <select name="relationship-ressource" id="relationship-ressource" required onChange={(e) => {setRelationshipRessource(e.target.value); }}>
                      <option disabled selected>--Sélectionner un type de relationship Ressource--</option>
                      {optionSelectRelationshipRessourceDB}
                    </select>

                    <select name="status-ressource" id="status-ressource" required onChange={(e) => {setStatus(e.target.value); }}>
                      <option disabled selected>--Sélectionner le statut--</option>
                      {optionSelectStatus}
                    </select>

                    <SubmitBtn inputText="Envoyer" />
                    <Link to="/">Retour</Link>

                  </form>

                  <h1>{submitRessourceStatus}</h1>
                  
                </div>
              </Row>
            </Col>
        </Row>
        <Footer/>
    </Container>
    
  );
}
