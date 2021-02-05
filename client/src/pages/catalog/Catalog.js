import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../../components/menu/Menu';
import Footer from '../../components/footer/Footer';
import CatalogComp from '../../components/ressource/catalog/CatalogComp';
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
              <Row className="last-adds"></Row>
              <Row className="catalog">
                <CatalogComp />
              </Row>
            </Col>
        </Row>
        <Footer/>
    </Container>
  );
}
