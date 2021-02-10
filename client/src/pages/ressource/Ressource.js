import React, { useState , useEffect } from "react";
import Menu from "../../components/menu/Menu";
import Ressource from '../../components/ressource/Ressource';
import WriteComment from '../../components/ressource/writecomment/WriteComment';
import Comments from '../../components/ressource/comments/Comment';
import './Ressource.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Axios from "axios";
import Footer from "../../components/footer/Footer";

export default function RessourcePage () {

  const [connecte, setConnecte] = useState("");
  const [role, setRole] = useState("");
  const [ecrireCommentaire, setEcrireCommentaire] = useState(false);

  useEffect(() => 
  {
    Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/login").then((response) => {
      if (response.data.loggedIn === true) {
        setConnecte(true);   
        setRole(response.data.user[0].fk_role);
      }
      else {setConnecte(false)}
    });
    if(connecte === true && role >= 2)
    {
      setEcrireCommentaire(true);
    }

  }, [connecte, role]);
  
  
  return (
    <Container fluid>
        <Row className="parent-row">
            <Col xl={3} className="col-menu menuFixe">
                <Menu />
            </Col>

            <Col xl={9} className="col-content-page">
              <Row className="row-ressource"><Ressource /></Row>
              <Row className="row-comments">
                <Col className="comments-container">
                  <Row><h2>Commentaires :</h2></Row>
                  <Row className="row-comment"><Comments /></Row>
                  <Row className="row-write-comment"> {ecrireCommentaire ? <WriteComment /> : <Col />}</Row>
                </Col>
              </Row>
            </Col>
        </Row>
        <Footer/>
    </Container>
  );
}