import React, { useState , useEffect } from "react";
import { useParams } from 'react-router-dom';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ckeditor, { CKEditor } from '@ckeditor/ckeditor5-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Axios from "axios";

export default function WriteComment () {

  const { id } = useParams();

  const [Ckeditor, setCkeditor] = useState("");
  const [idUser, setIdUser] = useState("");

  Axios.defaults.withCredentials = true;

  useEffect(() => 
  {
    Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/login").then((response) => {
      if (response.data.loggedIn === true) {
        setIdUser(response.data.user[0].id);
      }
    });
  });


  const handleCkeditorState = (event,editor) => {
    const data = editor.getData();
    setCkeditor(data);
    console.log(Ckeditor);
  }

  function envoyerMSG()
  {
    if(Ckeditor.trim() != '')
    {
      const date = new Date();
      const sqlDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+(date.getHours()+1)+":"+date.getMinutes()+":"+date.getSeconds();

      Axios.post(process.env.REACT_APP_SITE_URL_API+"/comments/create", {
        content : Ckeditor,
        nb_like : 0,
        date_creation : sqlDate,
        date_edition : sqlDate,
        deleted : 0,
        fk_ressource : id,
        fk_user : idUser,
      }).then((response) => {
        console.log(response);
        document.location.reload();
      });
    }
    else
    {
      alert("Message vide")
    }
    
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <CKEditor 
              editor={ClassicEditor}
              onInit={ editor =>{}}
              onChange={handleCkeditorState}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Button onClick={envoyerMSG} variant="secondary">Envoyer</Button>{' '}
          </Col>
        </Row>
      </Container>
    </>
  );
}