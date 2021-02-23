import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../../menu/MenuNav/Menu';
import Footer from '../../footer/Footer';

export default function Favorites() {


  return (
    <Container fluid>
        <Row className="parent-row">
            <Col xl={3} className="col-menu">
                <Menu activeSubMenu="user" activeSubSubMenu="myFavorites"/>
            </Col>

            <Col xl={9} className="col-content-page">
              <Row className="my-favorites-list">Voici mes ressources favorites</Row>
            </Col>
        </Row>
        <Footer/>
    </Container>
  );
}
