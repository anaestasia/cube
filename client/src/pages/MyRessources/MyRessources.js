import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';

import "./MyRessources.css";

export default function MyRessources() {

  return (
    <>
        <Row className="my-ressources-list">

          <Col xl={12}>
            <h1 className="page-title">MES RESSOURCES PERSONNELLES</h1>
          </Col>

          <Col xl={12}>
            <div>Vous n'avez créé aucune ressource pour le moment. Vous pouvez les créer en allant dans l'onglet "Créer une ressource" depuis le menu dépliant.</div>
          </Col>

        </Row>
    </>
  );
}