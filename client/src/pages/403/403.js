import { Link } from 'react-router-dom';
import "./403.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function NoAccess() {

  return (
	<Row>
		<Col>
			<h3>Oops! Accès refusé </h3>
			<div id="noAccess">
				<div className="noAccess">
					<div className="noAccess-403">
						<h1><span>4</span><span>0</span><span>3</span></h1>
					</div>
				</div>
			</div>	
			<h2>Nous sommes désolés, cette page n'est pas accessible </h2>
			<Link to="/catalog">Retour sur le site</Link>
			<br></br>
			<br></br>
		</Col>
	</Row>
    
  );
}
