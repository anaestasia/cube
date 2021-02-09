import React, { useState , useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../../components/menu/Menu';
import Footer from '../../components/footer/Footer';
import CatalogComp from '../../components/ressource/catalog/CatalogComp';
// import Ressource from '../../components/ressource/Ressource';
import Axios from "axios";
import './Catalog.css';
import VignetteRessource from '../../components/ressource/vignetteRessource/vignetteRessource';
// import NormalUser from "../components/NormalUser";
// import Mod from "../components/Mod";
// import Admin from "../components/Admin";

export default function Catalog({role}) {

const [lastRessources, setLastRessources] = useState([]);
const [status, setStatus] = useState("2");

// const fk_status = req.body.status;
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
            <Col xl={3} className="col-menu">
                <Menu />
            </Col>
            <Col xl={9} className="col-content-page">
              <Row className="catalog">

                <Col xl={12}>
                  <div className="last-adds">
                    <h2>DERNIERES RESSOURCES AJOUTÉES</h2>
                    <Row>
                      {lastRessources.map(lastRessource => ( 
                        <Col key={lastRessource.idRessource} sm={12} xl={4}><div className="ressource">
                          <VignetteRessource 
                            titre={lastRessource.title} 
                            categorie={lastRessource.categories}
                            typeRelation={lastRessource.namerelationship}
                            typeRessource={lastRessource.nametyperss}
                            nombreLike={lastRessource.nb_like}
                            idRessource= {lastRessource.idRessource}
                            nb_consultation = {lastRessource.nb_consultation}
                          />
                          </div></Col>
                      ))}
                    </Row>
                  </div>
                </Col>

                <Col xl={4}>
                  <CatalogComp />
                </Col>
                
              </Row>

            </Col>
        </Row>
        <Footer/>
    </Container>
  );
}
