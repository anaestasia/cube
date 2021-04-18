import { Link } from 'react-router-dom';
import "./404.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function NotFound() {

  return (
	<Row>
		<Col>
			<h3>Oops! Page non trouvée</h3>
			<div id="notfound">
				<div className="notfound">
					<div className="notfound-404">
						<h1><span>4</span><span>0</span><span>4</span></h1>
					</div>
				</div>
			</div>
			<h2>Nous sommes désolés, mais la page que vous avez demandée n’a pas été trouvée</h2>
			<Link to="/catalog">Retour sur le site</Link>
		</Col>
	</Row>
  );
}
