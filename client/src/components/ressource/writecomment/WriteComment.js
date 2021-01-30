import React, { useState , useEffect } from "react";
import { useParams } from 'react-router-dom';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Axios from "axios";
import '@ckeditor/ckeditor5-build-classic/build/translations/fr.js';

export default function WriteComment () {

  const { id } = useParams();

  const [Ckeditor, setCkeditor] = useState("");
  const [idUser, setIdUser] = useState("");
  const [donneCkeditor, setDonneCkeditor] = useState("");

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
    setDonneCkeditor(data);
    console.log(Ckeditor);
  }

  function envoyerMSG()
  {
    if(Ckeditor.trim() !== '')
    {
      const date = new Date();
      const sqlDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+(date.getHours())+":"+date.getMinutes()+":"+date.getSeconds();

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
        setDonneCkeditor('');
        console.log(donneCkeditor);
      });
    }
    else
    {
      alert("Message vide")
    }
    
  }

  return (
    <>
      <Container fluid className="ml-4">
        <Row>
          <Col xl={11}>
            <CKEditor 
              editor={ClassicEditor}
              data={donneCkeditor}
              onChange={handleCkeditorState}
              config={ {
                language: 'fr',
              } }
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