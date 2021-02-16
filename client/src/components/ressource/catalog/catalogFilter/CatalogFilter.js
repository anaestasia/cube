import React, { useState , useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CatalogFilter.css';
import Axios from "axios";
import VignetteFilterRessource from '../../vignetteRessource/vignetteFilterRessource';

export default function CatalogFilter() {

    const [typesressources, setTypesressources] = useState("");
    const [typesressourcesDB, setTypesressourcesDB] = useState([]);
    
    const [relationshipRessource, setRelationshipRessource] = useState("");
    const [relationshipRessourceDB, setRelationshipRessourceDB] = useState([]);

    const [lastRessources, setLastRessources] = useState([]);
    const [status, setStatus] = useState("2");

    const [role, setRole] = useState("");

    const [filtreExiste, setFiltreExiste] = useState(false);

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
                setLastRessources(response.data)
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
                setLastRessources(response.data)
            } 
            else{
                setFiltreExiste(false)
            }
            // console.log(response.data)
          });
    }

  return (
      <>
        <Col xl={4}>
            <div className="cards">
                Filtres
                <select name="type-ressource" id="type-ressource" onChange={(e) => { filtreressource("fk_type_ressource",e.target.value);}}>
                    <option value="">--Sélectionner un type de ressource--</option>
                    {optionSelectTypeRessources}
                </select>
                <select name="relationship-ressource" id="relationship-ressource" onChange={(e) => {filtreressource("fk_relationship_ressource",e.target.value); }}>
                      <option value="">--Sélecti un type de relationship Ressource--</option>
                      {optionSelectRelationshipRessourceDB}
                    </select>
                <br />
                <br />
            </div>
        </Col>

        <Col xl={8}>
            <div className="cards">
                <Row>
                    {filtreExiste ? lastRessources.map(lastRessource => ( 
                        <Col key={lastRessource.idRessource} sm={12} xl={6}>
                            <VignetteFilterRessource 
                                titre={lastRessource.title} 
                                categorie="champ vide"
                                typeRelation={lastRessource.namerelationship} 
                                typeRessource={lastRessource.nametyperss}
                                nombreLike={lastRessource.nb_like}
                                idRessource= {lastRessource.id}
                                nb_consultation = {lastRessource.nb_consultation}
                            />                         
                        </Col>
                    )) : <span>Aucun résultat</span>}
                    
                </Row>
            </div>
        </Col>
    </>
  );
}