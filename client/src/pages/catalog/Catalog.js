import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../../components/menu/Menu';
import Footer from '../../components/footer/Footer';
import CatalogComp from '../../components/ressource/catalog/CatalogComp';
import Ressource from '../../components/ressource/Ressource';
import './Catalog.css';
import VignetteRessource from '../../components/ressource/vignetteRessource/vignetteRessource';
// import NormalUser from "../components/NormalUser";
// import Mod from "../components/Mod";
// import Admin from "../components/Admin";

export default function Catalog() {


  return (
    <Container fluid>
        <Row className="parent-row">
            <Col xl={3} className="col-menu">
                <Menu />
            </Col>

            {/* {role == "visitor" && <NormalUser />}
                {role == "mod" && <Mod />}
                {role == "admin" && <Admin />} */}

            <Col xl={9} className="col-content-page">

              <Row className="catalog">

                <Col xl={12}>
                  <div className="last-adds">
                    <h2>DERNIERES RESSOURCES AJOUTÉES</h2>
                    <Row>
                      <Col sm={12} xl={4}><div className="ressource"><VignetteRessource /></div></Col>
                      <Col sm={12} xl={4}><div className="ressource"><VignetteRessource /></div></Col>
                      <Col sm={12} xl={4}><div className="ressource"><VignetteRessource /></div></Col>
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
