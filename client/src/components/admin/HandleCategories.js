import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TableCategories from '../tables/categories';
import './Admin.css';

export default function HandleRessources({role}) {
    
    let actionRole= false 
    if(role > 3)
    {
        actionRole = true 
    }

  return (
    <Row className="admin-container">
      <h1 className="page-title">GESTION DES CATÉGORIES</h1>

      <Col sm={12} md={12} lg={12} xl={12}>
          <TableCategories actionRole={actionRole}/>
      </Col>
    </Row>
  );
}