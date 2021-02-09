import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../../components/menu/Menu';
import Footer from '../../components/footer/Footer';
import EditPassword from '../../components/profil/editpassword';
import EditMail from '../../components/profil/editmail';
import EditFirstname from '../../components/profil/editfirstname';
import EditLastName from '../../components/profil/editlastname';
import EditStreetNB from '../../components/profil/editstreetnb';
import EditStreetName from '../../components/profil/editstreetname';
import EditCity from '../../components/profil/editcity';
import EditCountry from '../../components/profil/editcountry';
import EditPostalCode from '../../components/profil/editpostalcode';


export default function Profile() {

 
  return (
    <>
      <Container fluid>
        <Row className="parent-row">
              <Col xl={3} className="col-menu">
                  <Menu />
              </Col>

              <Col xl={9} className="col-content-page">
                <Row className="my-ressources-list">
                  <EditMail />
                  <EditPassword />
                  <EditFirstname />
                  <EditLastName />
                  <EditStreetNB />
                  <EditStreetName />
                  <EditCity /> 
                  <EditCountry />
                  <EditPostalCode />
                </Row>
              </Col>
          </Row>
          <Footer/>
      </Container>        
    </>
  );
}