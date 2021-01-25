import React, { useState, useEffect } from "react";
import { MDBDataTableV5 } from 'mdbreact';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Axios from "axios";

export default function TableRoles() {

  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShowE = () => editModal();
  const handleShowA = () => addModal();
  //fin modal

  const [nameEReg, setNameEReg] = useState("");
  const [titreModal, setTitreModal] = useState("");
  const [nomButton, setNomButton] = useState("");
  const [couleurButton, setCouleurButton] = useState("");
  const [nomFonction, setNomFonction] = useState("");

  // const donnees = [{ "id": 1, "name": "Not verified" },
  // { "id": 2, "name": "Citoyen" },
  // { "id": 3, "name": "Modérateur" },
  // { "id": 4, "name": "Admin" },
  // { "id": 5, "name": "Super-Admin" }];

  useEffect(() => {
    Axios.get(process.env.REACT_APP_SITE_URL_API + "/roles/get")
      .then((reponse) => {
        const data = reponse.data
        // console.log(data)
        setDatatable((datatable) => ({
          ...datatable,
          rows: data
        })
        )
      }
      )

    // {columns: [...datatable.columns], rows:reponse}
  }, []);

  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: 'id',
        field: 'id',
        width: 200,
      },
      {
        label: 'name',
        field: 'name',
        sort: 'asc',
        width: 100,
      },
    ],
    rows: [],
  });

  const [checkbox1, setCheckbox1] = useState('');
  const showLogs2 = (e) => {
    setCheckbox1(e);
  };

  function BtnEditer() {
    const LeButton = <Button variant="warning" onClick={handleShowE}>
      Editer
    </Button>
    if (checkbox1.name === undefined) {
      return (
        <>
        </>
      );
    }
    else {

      return (
        <>
          {LeButton}
        </>
      );
    }
  }

  function BtnAdd() {
    const LeButton = <Button variant="success" onClick={handleShowA}>
      Ajouter
    </Button>
    return (
      <>
        {LeButton}
      </>
    );
  }

  function addModal() {
    setShow(true);
    setNameEReg("");
    setTitreModal("Ajouter");
    setNomButton('Ajouter');
    setCouleurButton('success');
    setNomFonction("ajout");
  }

  function editModal() {
    setShow(true);
    setNameEReg(checkbox1.name);
    setTitreModal("Editer");
    setNomButton('Modifier');
    setCouleurButton('warning');
    setNomFonction("edit");
  }

  function editerApi() {

  }

  function addApi() {
    // alert(nameEReg);
    Axios.post(process.env.REACT_APP_SITE_URL_API + "/roles/create", {
      name: nameEReg, //regarder pour faire une recherche sur le nom sinon laisser l'id de la table role
    })
    .then( 
      window.location.reload(false)

      )
  }

  const fonctionModal = () => {
    if (nomFonction === "edit") {
      editerApi();
      handleClose();
    }
    else if (nomFonction === "ajout") {
      addApi();
      handleClose();
    }

  }

  const MDBDataTable = () => {
    if (datatable.rows.length > 0) {
       console.log(datatable)
      return (<MDBDataTableV5
        hover
        entriesOptions={[5, 20, 25]}
        entries={5}
        pagesAmount={4}
        data={datatable}
        checkbox
        headCheckboxID='id2'
        bodyCheckboxID='checkboxes2'
        getValueCheckBox={(e) => {
          showLogs2(e);
        }}
      />)
    }
    else
    {
      return null
    }
  }

  const unNom = MDBDataTable()


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{titreModal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Nom :</label>
          {/* value={checkbox1.name} */}
          <input type="text" id="idNameEdit" value={nameEReg} onChange={(e) => { setNameEReg(e.target.value); }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
        </Button>
          <Button variant={couleurButton} onClick={fonctionModal}>
            {nomButton}
          </Button>
        </Modal.Footer>
      </Modal>

      <Col>
        <BtnAdd /> {" "}
        <BtnEditer /> {" "}
        {/* <Button onClick={supprimer} variant="danger">Supprimer</Button> */}
      </Col>
      <br />
      {/* {console.log(datatable)} */}
      {unNom}
    </>
  );
}