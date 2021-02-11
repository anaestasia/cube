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

  const [editEmail, setEditEmail] = useState(true);
  const [editPsswd, setEditPsswd] = useState(false);
  const [currentActiveForm, setCurrentActiveForm] = useState('email');
 
  const toggleEmail = () =>
  {
    if(editEmail === false){
      setEditEmail(true)
      setEditPsswd(false)
      setCurrentActiveForm('email')
    }
  }

  const togglePsswd = () =>
  {
    if(editPsswd === false){
      setEditEmail(false)
      setEditPsswd(true)
      setCurrentActiveForm('psswd')
    }
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
                <h1 className="page-title">MODIFIER MON PROFIL</h1>
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
                <Row>
                  <Col xl={6}><button onClick={toggleEmail} className={ `btn-email-psswd ${ currentActiveForm === 'email' && 'activeForm' }` }>Mon email</button></Col>
                  <Col xl={6}><button onClick={togglePsswd}  className={ `btn-email-psswd ${ currentActiveForm === 'psswd' && 'activeForm' }` }>Mon mot de passe</button></Col>
                  <Col xl={12}>{editPsswd ? <EditPassword /> : <EditMail />}</Col>
                </Row>
              </Col>

            </Row>
          </Col>
            
        </Row>
        <Footer/>
      </Container>        
    </>
  );
}