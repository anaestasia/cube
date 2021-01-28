import React, { useState , useEffect } from "react";
import { useParams } from 'react-router-dom';
import './Comment.css';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ckeditor, { CKEditor } from '@ckeditor/ckeditor5-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Axios from "axios";
import Card from 'react-bootstrap/Card'
import Test from "./LesCommentaires"

export default function WriteComment () {

  const { id } = useParams();

  const [commentaireAPI, setCommentaireAPI] = useState("");


//   Axios.defaults.withCredentials = true;

    Axios.get(process.env.REACT_APP_SITE_URL_API+"/comments/get").then((response) => {
        setCommentaireAPI(response.data);
            //   console.log(response.data);
        });


  return (
    <>
    {/* <div className="comments">
        <h2>COMMENTAIRES</h2>
        <div className="comment">

            <div className="origin">
                <span>Jean Castex</span>
                <p className="comm-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a est ante. Duis posuere luctus ullamcorper. Curabitur auctor lorem tristique lacus ornare, convallis rhoncus libero tempus. Suspendisse id orci non nisl ornare luctus.</p>
            </div>

            <div className="answer">
                <span>Emmanuel Macron</span>
                <p className="comm-text">Lorem ipsum dolor sit amet</p>
            </div>

        </div>
     </div>  */}
       <Test />
        <Row>
        </Row>
    </>
  );
}