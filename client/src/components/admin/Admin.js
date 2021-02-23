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

export default function Admin() {

  return (
    <>
      <Container fluid>
        <Row>
            <Col xl={6} className="col-menu">
              <TableRoles actionRole={true}/>
              <TableCategories actionRole={true}/>
              <TableTypeRessources actionRole={true}/>
              <TableTypeRelationship actionRole={true}/>
              <TablePunishement actionRole={true}/>
              <TableReason actionRole={true}/>
            </Col>
          </Row>
        </Container>  
    </>
  );
}