import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EditPassword from '../../components/editpassword/editpassword';

export default function Profil() {


  return (
    <>
      <Container fluid>
        <Row>
            <Col xl={5} className="col-menu">
              <EditPassword />
            </Col>
          </Row>
        </Container>  
          
        

    </>
  );
}