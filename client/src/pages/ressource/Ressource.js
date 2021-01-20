import React from "react";
import Menu from "../../components/menu/Menu";
import Ressource from '../../components/ressource/Ressource';
import Comment from '../../components/ressource/comment/Comment';
import './Ressource.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function RessourcePage () {

  return (
    <Container fluid>
        <Row>
            <Col xl={3} className="col-menu">
                <Menu />
            </Col>

            <Col xl={9} className="col-content-page">
                <Row className="row-ressource "><Ressource /></Row>
                <Row className="row-comment"><Comment /></Row>
            </Col>
        </Row>
    </Container>
  );
}