import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TableReason from '../../tables/reason';
import './HandleReportReason.css';

export default function HandleReportReason({role}) {
    
    let actionRole= false 
    if(role > 3)
    {
        actionRole = true 
    }
    
  return (
    <Row className="fond">
        <Col>
            <TableReason actionRole={actionRole}/>
        </Col>
    </Row>
  );
}