import { Link, useParams } from 'react-router-dom';
import React, { useState , useEffect } from "react";
// import "./token.css";
import Axios from "axios";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Token() {

    const [message, setMessage] = useState("");
    let { token } = useParams();
    
    useEffect(() => {
      Axios.post(process.env.REACT_APP_SITE_URL_API+"/users/token",{
            token : token,
        }).then((response) => {
          if (response.data.token === true) {
            setMessage('Votre email a bien était enregistré');
            }
          else
          {
            setMessage("Erreur lors de l'enregristrement");
          }
        });
    }, [token]);

    return (
      <Row>
        <Col>
          <br></br>
          <h2>{message}</h2>
          <Link to="/catalog">Retour sur le site</Link>
          <br></br>
          <br></br>
          <br></br>
        </Col>
      </Row>
  );
}
