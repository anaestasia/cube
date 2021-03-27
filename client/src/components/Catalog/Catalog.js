import React from "react";

import CatalogFilter from './CatalogSearch/CatalogSearch';
import VignetteLastRessource from '../ressource/vignetteRessource/vignetteRessource';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Catalog.css';

export default function Catalog( { ressources } ) {

  return (
    <Row className="catalog">

      {/* Derniers ajouts ressources */}
      <Col xl={12} className="last-adds">
        <h2>DERNIERES RESSOURCES AJOUTÉES</h2>
        <Row className="last-adss-row">
          {ressources.map(ressources => ( 
            <Col key={ressources.idRessource} sm={12} xl={4}>
              <VignetteLastRessource 
                titre={ressources.title} 
                categorie="Divers"
                typeRelation={ressources.namerelationship}
                typeRessource={ressources.nametyperss}
                nombreLike={ressources.nb_like}
                idRessource= {ressources.idRessource}
                nb_consultation = {ressources.nb_consultation}
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
  );
}
