import { Link } from 'react-router-dom';
import "./403.css";

// import NormalUser from "../components/NormalUser";
// import Mod from "../components/Mod";
// import Admin from "../components/Admin";

export default function NoAccess() {

  return (
    <div id="notfound">
		<div class="notfound">
			<div class="notfound-403">
				<h3>Oops! Accès refusé </h3>
				<h1><span>4</span><span>0</span><span>3</span></h1>
			</div>
			<h2>Nous sommes désolés, vous devez vous déconnecter avant d'accéder à cette page</h2>
            <Link to="/main">Retour sur le site</Link>
		</div>
	</div>
  );
}
