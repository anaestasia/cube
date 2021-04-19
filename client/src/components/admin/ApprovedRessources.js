import React, { useState , useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Axios from "axios";
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import './Admin.css'

export default function Admin() {

    const [articleNonApprouved, setArticleNonApprouved] = useState([]);
    const [contenuModal, setContenuModal] = useState([]);
    const [titreModal, setTitreModal] = useState([]);
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    useEffect(() => 
    {
        Axios.get(process.env.REACT_APP_SITE_URL_API+"/ressources/getNonAp").then((response) => {
            if(response.data.existe !== false)
            {
                setArticleNonApprouved(response.data)
            } 
        });
    }, []);

    //ressourceApprouved
    const approuvedRessource = (idRessource) => {
        Axios.post(process.env.REACT_APP_SITE_URL_API+"/ressources/ressourceApprouved", {
            id: idRessource
          })
        window.location.reload()
    }

    const delRessource = (idRessource) => {
        Axios.post(process.env.REACT_APP_SITE_URL_API+"/ressources/ressourceDeleted", {
            id: idRessource
          })
        window.location.reload()
    }

    const modal = (contenu,titre) =>
    {
        setContenuModal(contenu); 
        setTitreModal(titre); 
        setShow(true); 
    }

  return (
    <>
        <Row className="admin-container">

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

          <Container fluid>
            <h1 className="page-title">APPROUVER LES RESSOURCES</h1>

            <Table bordered hover>
              <thead>
                <tr>
                <th>#</th>
                <th>Auteur</th>
                <th>Titre</th>
                <th>Contenu</th>
                <th>Type ressource</th>
                <th>Relationship</th>
                <th>Categories</th>
                <th>Statut</th>
                <th>Date de création</th>
                </tr>
              </thead>
              <tbody>
              {articleNonApprouved.map(article => ( 
                <tr key={article.idRessource} >
                    {/* dangerouslySetInnerHTML={{__html: article.content}}> */}
                    <td><button onClick={() => {approuvedRessource(article.idRessource); }} >Approuver</button>/
                    <button onClick={() => {delRessource(article.idRessource); }} >Supprimer</button></td>
                    <td>{article.user}</td>
                    <td>{article.title}</td>
                    <td><button onClick={() =>( modal(article.content,article.title) )}>Voir</button></td>
                    <td>{article.nametyperss}</td>
                    <td>{article.namerelationship}</td>
                    <td>{article.categories}</td>
                    <td>{article.namestatus}</td>
                    <td>{article.date_creation.substring(8,10)}/{article.date_creation.substring(5,7)}/{article.date_creation.substring(0,4)} à {article.date_creation.substring(11,19)}</td>
                </tr>
              ))}
                  {/* <td><button>Approuver</button>/<button>Supprimer</button></td> */}
              </tbody>
            </Table>
          </Container>

        </Row>
    </>
  );
}