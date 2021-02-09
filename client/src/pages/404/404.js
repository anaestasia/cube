import { Link } from 'react-router-dom';
import "./404.css";

// import NormalUser from "../components/NormalUser";
// import Mod from "../components/Mod";
// import Admin from "../components/Admin";

export default function NotFound() {

  return (
    <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h3>Oops! Page non trouvée</h3>
				<h1><span>4</span><span>0</span><span>4</span></h1>
			</div>
			<h2>Nous sommes désolés, mais la page que vous avez demandée n’a pas été trouvée</h2>
            <Link to="/catalog">Retour sur le site</Link>
		</div>
	</div>
  );
}
