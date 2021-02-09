import { Link } from 'react-router-dom';
import "./403.css";

// import NormalUser from "../components/NormalUser";
// import Mod from "../components/Mod";
// import Admin from "../components/Admin";

export default function NoAccess() {

  return (
    <div id="noAccess">
		<div class="noAccess">
			<div class="noAccess-403">
				<h3>Oops! Accès refusé </h3>
				<h1><span>4</span><span>0</span><span>3</span></h1>
			</div>
			<h2>Nous sommes désolés, cette page n'est pas accessible </h2>
            <Link to="/catalog">Retour sur le site</Link>
		</div>
	</div>
  );
}
