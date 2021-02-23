import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import '@ckeditor/ckeditor5-build-classic/build/translations/fr.js';
import Axios from "axios";

const Posts = ({ posts , idUser , role}) => {

  const [show, setShow] = useState(false);

  const [idCommentaire, setIdCommentaire] = useState("");
  const [contenuCommentsCkeditor, setContenuCommentsCkeditor] = useState("");


  const handleClose = () => setShow(false);

  const handleShow = (id) => {
    setShow(true)
    setIdCommentaire(id);
    Axios.get(process.env.REACT_APP_SITE_URL_API+"/comments/gets/"+id).then((response) => {
      setContenuCommentsCkeditor(response.data[0].content)
    });
  }

  const handleCkeditorState = (event,editor) => {
    const data = editor.getData();
    setContenuCommentsCkeditor(data);
  }

  const editComments = () => 
  {
  //   content = req.body.content;
  // const id
    const date = new Date();
    const sqlDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+(date.getHours())+":"+date.getMinutes()+":"+date.getSeconds();

    Axios.post(process.env.REACT_APP_SITE_URL_API+"/comments/editComment", {
      id: idCommentaire,
      content: contenuCommentsCkeditor,
      date_edition:sqlDate
    }).then((response) => {
        if(response.data.verif)
        {
          setShow(false)
        }
  });
  }

  return (
   <>
   <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier ton commentaire </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <CKEditor 
              editor={ClassicEditor}
              data={contenuCommentsCkeditor}
              onChange={handleCkeditorState}
              config={ {
                language: 'fr',
              } }
            />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            fermer
          </Button>
          <Button variant="warning" onClick={editComments}>
            Modifier
          </Button>
        </Modal.Footer>
      </Modal>

      <Row>
        <Col className="ml-5">
      {posts.map(post => ( 
      <div key={post.id} >
        <Card>
          <Card.Title>{post.nom}{" "}{post.prénom}</Card.Title>
          <span>Date création le {post.date_creation.substring(8,10)}/{post.date_creation.substring(5,7)}/{post.date_creation.substring(0,4)} à {post.date_creation.substring(11,19)}</span>
          {(post.fk_user === idUser || role >=4) && <Button variant="primary" onClick={() => {handleShow(post.id); }}> Edit </Button>  }
          <hr />
            <Card.Text dangerouslySetInnerHTML={{__html: post.content}}>
          </Card.Text>
          <hr />
          {post.date_creation !== post.date_edition && <>Dernière modification : {post.date_edition.substring(8,10)}/{post.date_edition.substring(5,7)}/{post.date_edition.substring(0,4)} à {post.date_edition.substring(11,19)} <br /></> }
           {post.nb_like} ♡ 
        </Card><br />
      </div>
      ))}
      </Col>
    </Row></>
  );
};

export default Posts;
