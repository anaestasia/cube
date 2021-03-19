import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TableTypeRessources from '../../tables/typeressources';
import './GererTypeRessources.css';

export default function GererTypeRessources({role}) {
    
    let actionRole= false 
    if(role > 3)
    {
        actionRole = true 
    }
    
  return (
    <Row className="fond">
        <Col>
            <TableTypeRessources actionRole={actionRole}/>
        </Col>
    </Row>
  );
}