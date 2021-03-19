import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TablePunishement from '../../tables/punishement';
import './GererPunishement.css';

export default function GererPunishement({role}) {
    
    let actionRole= false 
    if(role > 3)
    {
        actionRole = true 
    }

  return (
    <Row className="fond">
        <Col>
            <TablePunishement actionRole={actionRole}/>
        </Col>
    </Row>
  );
}