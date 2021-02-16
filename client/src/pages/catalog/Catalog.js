import React, { useState , useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../../components/menu/Menu';
import Footer from '../../components/footer/Footer';
// import CatalogComp from '../../components/ressource/catalog/CatalogComp';
import CatalogFilter from '../../components/ressource/catalog/catalogFilter/CatalogFilter';
// import Ressource from '../../components/ressource/Ressource';
import Axios from "axios";
import './Catalog.css';
import VignetteLastRessource from '../../components/ressource/vignetteRessource/vignetteLastRessource';

export default function Catalog() {

const [lastRessources, setLastRessources] = useState([]);
const [status, setStatus] = useState("2");

const [role, setRole] = useState("");

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
      Axios.get(process.env.REACT_APP_SITE_URL_API+"/ressources/lastressource/"+status).then((response) => {
          if(response.data.existe !== false)
          {
            setLastRessources(response.data)
          } 
          console.log(response)
      });
  }, [role,status]);


  return (
    <Container fluid>
        <Row className="parent-row">

            <Col xl={3} className="col-menu menuFixe">
              <Menu activeSubMenu="ressource" activeSubSubMenu="catalog"/>
            </Col>

            <Col xl={9} className="col-content-page">

              <Row className="catalog">

                {/* Derniers ajouts ressources */}
                <Col xl={12} className="last-adds">
                  <Row>
                    <Col xl={12}><h2>DERNIERES RESSOURCES AJOUTÉES</h2></Col>
                    {lastRessources.map(lastRessource => ( 
                      <Col key={lastRessource.idRessource} sm={12} xl={4}>
                        <VignetteLastRessource 
                          titre={lastRessource.title} 
                          categorie={lastRessource.categories}
                          typeRelation={lastRessource.namerelationship}
                          typeRessource={lastRessource.nametyperss}
                          nombreLike={lastRessource.nb_like}
                          idRessource= {lastRessource.idRessource}
                          nb_consultation = {lastRessource.nb_consultation}
                        />
                      </Col>
                    ))}
                  </Row>
                </Col>

                 {/* catalogue + filtres */}
                <Col xl={12} className="search-catalog">
                  <CatalogFilter />
                </Col>

              </Row>

            </Col>
        </Row>
        <Footer/>
    </Container>
  );
}
