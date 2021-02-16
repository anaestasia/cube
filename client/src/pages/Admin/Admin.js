import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';// eslint-disable-next-line
import TableRoles from '../../components/table/roles';// eslint-disable-next-line
import TableCategories from '../../components/table/categories';// eslint-disable-next-line
import TableTypeRessources from '../../components/table/typeressources';// eslint-disable-next-line
import TableTypeRelationship from '../../components/table/typerelationship';// eslint-disable-next-line
import TablePunishement from '../../components/table/punishement';// eslint-disable-next-line
import TableReason from '../../components/table/reason';// eslint-disable-next-line

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