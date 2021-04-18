import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Favorites.css';

export default function Favorites() {

  return (
    <>
      <Row className="my-favorites-list">
       
        <Col xl={12}>
          <h1 className="page-title">MES RESSOURCES FAVORIES</h1>
        </Col>

        <Col xl={12}>
          <div>Vous n'avez aucune ressource favorie pour le moment. Vous pouvez les ajouter en cliquant sur l'icône <i className="far fa-heart"></i> qui se trouve sur chaque ressource.</div>
        </Col>

      </Row>
    </>
  );
}
