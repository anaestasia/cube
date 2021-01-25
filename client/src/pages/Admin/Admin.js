import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TableRoles from '../../components/table/roles';

export default function Admin() {


  return (
    <>
      <Container fluid>
        <Row>
            <Col xl={5} className="col-menu">
              <TableRoles />
            </Col>
          </Row>
        </Container>  
          
        

    </>
  );
}