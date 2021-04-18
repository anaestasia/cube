import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TableTypeRelationship from '../../tables/typerelationship';
import './HandleRelationshipType.css';

export default function HandleRelationshipType({role}) {
    
    let actionRole= false 
    if(role > 3)
    {
        actionRole = true 
    }
    
  return (
    <Row className="fond">
        <Col>
            <TableTypeRelationship actionRole={actionRole}/>
        </Col>
    </Row>
  );
}