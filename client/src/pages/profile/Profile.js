import React, { useState } from "react";
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
import './Profile.css';


export default function Profile() {

  const [voirEmail, setVoirEmail] = useState(false);
 
  const voirE = () =>
  {
    if(voirEmail === false){setVoirEmail(true)}
    else{setVoirEmail(false)}
  }
  return (
    <>
      <Container fluid>
        <Row className="parent-row">

          <Col xl={3} className="col-menu">
              <Menu />
          </Col>

          <Col xl={9} className="col-content-page">
            <Row className="profil-form">

              <Col xl={12}>
                <h2 className="page-title">MODIFIER MON PROFIL</h2>
              </Col>

              <Col xl={6}>
                <EditFirstname />
                <EditLastName />
                <EditStreetNB />
                <EditStreetName />
                <EditCity /> 
                <EditCountry />
                <EditPostalCode />
              </Col>

              <Col xl={6}>
                <button onClick={voirE}>modif email </button>
                <button>modif pswd</button>
                {voirEmail ? <EditMail /> : <span></span>}
                
                <EditPassword />
              </Col>

            </Row>
          </Col>
            
        </Row>
        <Footer/>
      </Container>        
    </>
  );
}