import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Axios from "axios";
import Table from './table';
import Button from 'react-bootstrap/Button';

export default function TableTypeRessources({actionRole}) {
  
  const nomDeLaTable = "typesRessources"
  //modal 
  const [show, setShow] = useState(false);
  const titreModal = 'Types de ressources';
  const [typeRessources, setTyperessources] = useState('');
  const [ajouterModal, setAjouterModal] = useState(true);

  const handleClose = () => setShow(false);
  //fin modal
  const titreTableau = "Types de ressources";
  //modal del
  const [showD, setShowD] = useState(false);
  const handleCloseD = () => setShowD(false);
  //fin modal del

  const [data, setData] = useState([]);

  const [rowEdit, setRowEdit] = useState([]);
  
  const columns = [
    {
      name: "Nom du type de la ressource",
      selector: "name",
      sortable: true
    }  
  ];
 
  const getApi = () => 
  {
    Axios.get(process.env.REACT_APP_SITE_URL_API + "/"+nomDeLaTable+"/get").then((reponse) => {
      setData(reponse.data)
    })
  }

  const columnsAction = [
    ...columns,
    {
      name: "Action",
      cell: (row) => <><Button variant="warning" onClick={() => {editRow(row);}}>Modifier</Button></>,
      ignoreRowClick: true,
      allowOverflow: true, 
      button: true
    },
    {
      name: "Action",
      cell: (row) => <Button variant="danger" onClick={() => {delRow(row);}}>Supp</Button>,
      ignoreRowClick: true,
      allowOverflow: true, 
      button: true
    }
  ];
  
  useEffect(() => {
    getApi();
  }, []);
 
  const editRow = row => {
    setRowEdit(row)
    setAjouterModal(false)
    setShow(true);
    setTyperessources(row.name);
  }

  const delRow = row => {
    setShowD(true)
    setRowEdit(row)
  }

  const delApi = () => 
  {
    Axios.delete(process.env.REACT_APP_SITE_URL_API + "/"+nomDeLaTable+"/delete/"+rowEdit.id)
        .then(res => {
          getApi()
          handleCloseD()
      })
  }
  const addRow = () => 
  {
    setAjouterModal(true)
    setShow(true);
    setTyperessources("");
  }

  const EditApi = () => 
  {
    Axios.post(process.env.REACT_APP_SITE_URL_API + "/"+nomDeLaTable+"/update", {
      name: typeRessources,
      id: rowEdit.id,
    }).then(() => 
    {
      getApi()
      handleClose()
    })
  }

  const AddApi = () => 
  {
    Axios.post(process.env.REACT_APP_SITE_URL_API + "/"+nomDeLaTable+"/create", {
      name: typeRessources,
    }).then(() => 
    {
      getApi()
      handleClose()
    })
  }
  return (
    <>
    <Modal show={showD} onHide={handleCloseD}>
        <Modal.Header closeButton>
          <Modal.Title>Supprimer</Modal.Title>
        </Modal.Header>
        <Modal.Body>Voulez vous supprimer {rowEdit.name}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseD}>
            Fermer
          </Button>
          <Button variant="danger" onClick={delApi}>
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{titreModal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Nom :</label>
          {/* value={checkbox1.name} */}
          <input type="text" id="idNameEdit" value={typeRessources} onChange={(e) => { setTyperessources(e.target.value); }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
        </Button>
        {ajouterModal ? 
          <Button variant={"success"} onClick={AddApi}>
            Ajouter
          </Button>
          :
          <Button variant={"warning"} onClick={EditApi}>
            Modifier
          </Button>
        }
        </Modal.Footer>
      </Modal>
      <br></br>
      { actionRole ? 
        <>
          <Button variant="success" onClick={addRow}> Ajouter </Button> 
          <br></br>
          <Table titre={titreTableau} columns={columnsAction} data={data}/> 
        </>
        : 
        <Table titre={"Role"} columns={columns} data={data}/>}
      <br></br>
    </>
  );
}