import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import EditPassword from '../../components/profil/editpassword';
// import EditMail from '../../components/profil/editmail';
// import EditFirstname from '../../components/profil/editfirstname';
import EditLastName from '../../components/profil/editlastname';

export default function Profil() {


  return (
    <>
      <Container fluid>
        <Row>
            <Col xl={5} className="col-menu">
              {/* <EditMail/> */}
              {/* <EditPassword /> */}
              {/* <EditFirstname /> */}
              <EditLastName />
            </Col>
          </Row>
        </Container>  
          
        

    </>
  );
}