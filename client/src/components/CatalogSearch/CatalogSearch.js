import React, { useState , useEffect } from "react";
import Axios from "axios";

import VignetteRessource from '../ressource/VignetteRessource/VignetteRessource';
import Pagination from '../ressource/Pagination/Pagination'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './CatalogSearch.css';

export default function CatalogSearch() {

    const [typesressources, setTypesressources] = useState("");
    const [typesressourcesDB, setTypesressourcesDB] = useState([]);
    
    const [relationshipRessource, setRelationshipRessource] = useState("");
    const [relationshipRessourceDB, setRelationshipRessourceDB] = useState([]);

    const [ressourceFiltre, setRessourceFiltre] = useState([]);
    const [status, setStatus] = useState("2");

    const [role, setRole] = useState("");

    const [filtreExiste, setFiltreExiste] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);

    useEffect(() => 
    {
        Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/login").then((response) => {
            if (response.data.loggedIn === true) {

                setRole(response.data.user[0].fk_role);
            }
            else {setRole(0)}
        });
    }, []);

    useEffect(() => 
    {
        if(role >=2){ setStatus("1") }
        Axios.post(process.env.REACT_APP_SITE_URL_API+"/ressources/getFiltre", {
            filtre: "",
          }).then((response) => {
            if(response.data.existe !== false)
            {
                setRessourceFiltre(response.data)
                setFiltreExiste(true)
            } 
            else
            {
                setFiltreExiste(false)
            }
            console.log(response)
        });

        Axios.get(process.env.REACT_APP_SITE_URL_API+"/typesressources/get").then((response) => {
            setTypesressourcesDB(response.data);
            // console.log(response.data)
          });
          Axios.get(process.env.REACT_APP_SITE_URL_API+"/relationshipRessources/get").then((response) => {
            setRelationshipRessourceDB(response.data);
            // console.log(response.data)
          });
    }, [role,status]);

    const optionSelectTypeRessources = typesressourcesDB.map((st) =>
        <option  key={st.id} value={st.id}> {st.name} </option>
    );
    const optionSelectRelationshipRessourceDB = relationshipRessourceDB.map((st) =>
        <option  key={st.id} value={st.id}> {st.name} </option>
    );

    const filtreressource = (champ,value) =>
    {
        let filtre = "";
        if(typesressources !== "" || champ === "fk_type_ressource")
        {
            if(champ === "fk_type_ressource")
            {
                setTypesressources(value);
                if(value !== "")
                {
                    filtre += " and fk_type_ressource = "+value;
                }
            }
            else
            {
                filtre += " and fk_type_ressource = "+typesressources;
            }
        }
        if(relationshipRessource !== ""  || champ === "fk_relationship_ressource")
        {
            if(champ === "fk_relationship_ressource")
            {
                setRelationshipRessource(value);
                if(value !== "")
                {
                    filtre += " and fk_relationship_ressource = "+value;
                }
            }
            else
            {
                filtre += " and fk_relationship_ressource = "+relationshipRessource;
            }
        }

            requeteFiltre(filtre)
    }

    const requeteFiltre = (filtre) =>
    {
        Axios.post(process.env.REACT_APP_SITE_URL_API+"/ressources/getFiltre", {
            filtre: filtre,
          }).then((response) => {
              console.log(response)
            if(response.data.existe !== false)
            {
                setFiltreExiste(true)
                setRessourceFiltre(response.data)
            } 
            else{
                setFiltreExiste(false)
            }
            // console.log(response.data)
          });
    }

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = ressourceFiltre.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
      <>
        <Col sm={12} md={3} lg={3} xl={3} className="search-filters">
            <div>
                <h2>Filtres</h2>
                <label>Types :</label>
                <select name="type-ressource" id="type-ressource" onChange={(e) => { filtreressource("fk_type_ressource",e.target.value);}}>
                    <option value="">Tous les types</option>
                    {optionSelectTypeRessources}
                </select>
                <label>Relation :</label>
                <select name="relationship-ressource" id="relationship-ressource" onChange={(e) => {filtreressource("fk_relationship_ressource",e.target.value); }}>
                    <option value="">Toutes les relations</option>
                    {optionSelectRelationshipRessourceDB}
                </select>
            </div>
        </Col>


        <Col sm={12} md={9} lg={9} xl={9} className="cards-col">
            <div className="cards">
                <Row>
                    {filtreExiste ? currentPosts.map(lastRessource => ( 
                        <Col key={lastRessource.idRessource} sm={12} xl={6} className="result-card">
                            <VignetteRessource 
                                titre={lastRessource.title} 
                                categorie="Divers"
                                typeRelation={lastRessource.namerelationship} 
                                typeRessource={lastRessource.nametyperss}
                                nombreLike={lastRessource.nb_like}
                                idRessource= {lastRessource.idRessource}
                                nb_consultation = {lastRessource.nb_consultation}
                            />                       
                        </Col>
                    )) : <span>Aucun résultat</span>}
                </Row>

                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={ressourceFiltre.length}
                    paginate={paginate}
                    currentPage = {currentPage}
                />
            </div>
        </Col>
    </>
  );
}