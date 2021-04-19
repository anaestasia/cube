import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TableRoles from '../tables/roles';
import TableCategories from '../tables/categories';
import TableTypeRessources from '../tables/typeressources';
import TableTypeRelationship from '../tables/typerelationship';
import TablePunishement from '../tables/punishement';
import TableReason from '../tables/reason';

import './Admin.css'

export default function Admin() {

  return (
    <>
      <Container fluid>
        <Row>
            <h1 className="page-title">BACK-OFFICE</h1>

            <Col sm={12} md={12} lg={12} xl={12}>

              <div className="bo-part">
                <h2>RÔLES</h2>
                <br></br>
                <TableRoles actionRole={true}/>
              </div>

              <div className="bo-part">
                <h2>CATÉGORIES</h2>
                <TableCategories actionRole={true}/>
              </div>

              <div className="bo-part">
                <h2>TYPES DE RESSOURCE</h2>
                <TableTypeRessources actionRole={true}/>
              </div>

              <div className="bo-part">
                <h2>TYPES DE RELATION</h2>
                <TableTypeRelationship actionRole={true}/>
              </div>

              <div className="bo-part">
                <h2>BANISSEMENTS</h2>
                <TablePunishement actionRole={true}/>
              </div>

              <div className="bo-part">
                <h2>MOTIFS DE BANISSEMENT</h2>
                <TableReason actionRole={true}/>
              </div>
              
            </Col>
          </Row>
        </Container>  
    </>
  );
}