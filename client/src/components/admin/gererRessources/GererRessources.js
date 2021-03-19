import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TableCategories from '../../tables/categories';
import './GererRessources.css';

export default function GererRessources({role}) {
    
    let actionRole= false 
    if(role > 3)
    {
        actionRole = true 
    }

  return (
    <Row className="fond">
        <Col>
            <TableCategories actionRole={actionRole}/>
        </Col>
    </Row>
  );
}