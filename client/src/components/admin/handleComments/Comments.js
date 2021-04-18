import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Axios from 'axios'

export default function Comments()
{
    const [commReported, setCommReported] = useState([]);
    const [reasons, setReasons] = useState([]);

    const [selectedOption, setSelectedOption] = useState(2);

    const [show, setShow] = useState(false);
    const [contenuModal, setContenuModal] = useState([]);
    const [titreModal, setTitreModal] = useState([]);

    const [showReasons, setShowReasons] = useState(false);

    const [idReport, setIdReport] = useState(0);

    useEffect(() =>
    {
        Axios.get(process.env.REACT_APP_SITE_URL_API+"/reports/getNonTreated").then((response) => 
        {
            setCommReported(response.data);
        });

        Axios.get(process.env.REACT_APP_SITE_URL_API+"/reasons/get").then((response) =>
        {
            setReasons(response.data);
        });
    }, []);

    const modal = (id) =>
    {
        Axios.get(process.env.REACT_APP_SITE_URL_API+"/comments/gets/"+id).then((response) => 
        {   
            setContenuModal(response.data[0].content); 
            setTitreModal("Commentaire : " + response.data[0].id); 
            setShow(true); 
        });
    }

    const modalPunishement = (id) =>
    {
        setShowReasons(true);
        setIdReport(id);
    }

    const handleClose = () => 
    {
        setShow(false);
        setShowReasons(false);
    }

    const validReport = () =>
    {
        Axios.post(process.env.REACT_APP_SITE_URL_API+"/reports/valid/"+idReport, 
        {
            id: idReport,
            reason: selectedOption
        }).then((response) => 
        {
            Axios.get(process.env.REACT_APP_SITE_URL_API+"/reports/getNonTreated").then((response) => 
            {
                setCommReported(response.data);
            });
        });
        setShowReasons(false);
    }

    const handleDelete = (id) =>
    {
        Axios.delete(process.env.REACT_APP_SITE_URL_API+"/reports/delete/"+id).then((response) => 
        {
            Axios.get(process.env.REACT_APP_SITE_URL_API+"/reports/getNonTreated").then((response) => 
            {
                setCommReported(response.data);
            });
        });
    }

    return (
        <>
            <Col xl={9} className="col-content-page">
                <Row className="approved-ressource-container">

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{titreModal}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div><span dangerouslySetInnerHTML={{__html: contenuModal}}></span></div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Fermer
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={showReasons} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Raisons du signalement</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Select onChange={(value) => setSelectedOption(value.value)} options={reasons}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={validReport}>
                                Valider
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                Fermer
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Container fluid>
                        <Table bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Contenue</th>
                                    <th>Utilisateur</th>
                                </tr>
                            </thead>
                            <tbody>
                                {commReported.map(article => (
                                    <tr key={article.id}>
                                        <td>
                                            <Button onClick={() =>{ modalPunishement(article.id); }}>Punir</Button>
                                            <Button variant="danger" onClick={() =>{ handleDelete(article.id); }}>Supprimer</Button>
                                        </td>
                                        <td>
                                            <Button onClick={() => {modal(article.fk_comment); }}>Afficher</Button>
                                        </td>
                                        <td>{article.firstname} {article.lastname}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Container>
                </Row>
            </Col>
        </>
    );
}