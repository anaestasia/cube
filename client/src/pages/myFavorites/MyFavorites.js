import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../../components/menu/Menu';
import Footer from '../../components/footer/Footer';

export default function MyFavorites() {


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
