import React, { useState , useEffect } from "react";
import Axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../../components/menu/Menu';
import Footer from '../../components/footer/Footer';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import "./MyRessources.css"
import Table from 'react-bootstrap/Table'

export default function MyRessources() {

  const [mesRessources, setMesRessources] = useState([]);

  const [contenuModal, setContenuModal] = useState([]);
  const [titreModal, setTitreModal] = useState([]);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  
  const [id, setId] = useState("");

  Axios.defaults.withCredentials = true;
  useEffect(() => {

    Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/login").then((response) => {
      if (response.data.loggedIn === true) {
        setId(response.data.user[0].id);
      }
    });
  }, []);

  useEffect(() => 
    {
        Axios.get(process.env.REACT_APP_SITE_URL_API+"/usersressources/mesRessources/"+id).then((response) => {
            if(response.data.existe !== false)
            {
                setMesRessources(response.data)
            } 
            console.log(response)
        });
    }, [id]);

    const modal = (contenu,titre) =>
    {
        setContenuModal(contenu); 
        setTitreModal(titre); 
        setShow(true); 
    }
  
  return (
    <Container fluid>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contenue de l'article : {titreModal}</Modal.Title>
        </Modal.Header>
        <Modal.Body><div><span dangerouslySetInnerHTML={{__html: contenuModal}}></span></div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        <Row className="parent-row">
            <Col xl={3} className="col-menu menuFixe">
                <Menu activeSubMenu="user" activeSubSubMenu="MyRessource"/>
            </Col>

            <Col xl={9} className="col-content-page">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Voir</th>
                    <th>Titre</th>
                    <th>Contenu</th>
                    <th>Type ressource</th>
                    <th>Relationship</th>
                    <th>Categories</th>
                    <th>Statut</th>
                    <th>Approuver</th>
                    <th>Date création</th>
                    <th>Supprimé</th>
                  </tr>
                </thead>
                <tbody>
                {mesRessources.map(article => ( 
                  <tr key={article.idRessource} >
                      {article.deleted || !article.approved ? <td></td> :<td><a href={"/ressource/"+article.idRessource} >Voir</a></td> }
                      <td>{article.title}</td>
                      <td><button onClick={() =>( modal(article.content,article.title) )}>Voir</button></td>
                      <td>{article.nametyperss}</td>
                      <td>{article.namerelationship}</td>
                      <td>{article.categories}</td>
                      <td>{article.namestatus}</td>
                      <td>{article.approved ? <span>Oui</span> : <span>Non</span>}</td>
                      <td>{article.date_creation.substring(8,10)}/{article.date_creation.substring(5,7)}/{article.date_creation.substring(0,4)} à {article.date_creation.substring(11,19)}</td>
                      <td>{article.deleted ? <span>Oui</span> : <span>Non</span>}</td>
                  </tr>
              ))}
                </tbody>
              </Table>
            </Col>
        </Row>
        <Footer/>
    </Container>
  );
}
