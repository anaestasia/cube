import LoginForm from "../form/LoginForm/LoginForm";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Home.css";

export default function Home({ onSubmit, formValue, onChange, connected }) {
  const [role, setRole] = useState("");

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get(process.env.REACT_APP_SITE_URL_API + "/users/login").then(
      (response) => {
        if (response.data.loggedIn === true) {
          setRole(response.data.user[0].fk_role);
        }
      }
    );
  }, []);

  return (
    <Container className="accueil-container">
      <Row className="logo-container">
        <Col xl={12}>
          <img
            src="/img/logo/logo_ressources_relationnelles_transparent.png"
            className="App-logo-menu"
            alt="logo"
          />
        </Col>
      </Row>

      <Row className="container-form">
        {!connected && (
          <Col sm={12} md={6} xl={6} className="form-login">
            <LoginForm
              onSubmit={onSubmit}
              onChange={onChange}
              formValue={formValue}
            />
          </Col>
        )}

        <Col sm={12} md={6} xl={6} className="btn-discover">
          <img src="/img/discover.png" className="App-logo-menu" alt="logo" />
          {/* <Link to="/catalog">Découvrir</Link> */}
          <button onClick={() => (window.location.href = "/catalog")}>
            Découvrir
          </button>
        </Col>
      </Row>
    </Container>
  );
}
