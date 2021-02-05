import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../../components/menu/Menu';
import Footer from '../../components/footer/Footer';

export default function MyRessources() {


  return (
    <Container fluid>
        <Row className="parent-row">
            <Col xl={3} className="col-menu">
                <Menu />
            </Col>

            <Col xl={9} className="col-content-page">
              <Row className="my-ressources-list">Voici mes ressources (celles que j'ai créées, que je suis où que j'ai ajouté à ma liste pour les consulter plus tard)</Row>
            </Col>
        </Row>
        <Footer/>
    </Container>
  );
}
