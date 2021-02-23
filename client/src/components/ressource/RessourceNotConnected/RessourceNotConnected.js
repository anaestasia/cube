import { Link } from 'react-router-dom';
import React from "react";

// import NormalUser from "../components/NormalUser";
// import Mod from "../components/Mod";
// import Admin from "../components/Admin";

import "./RessourceNotConnected.css";

export default function RessourceNotConnected() {

    return (
    <div id="token">
		<div className="token">
			<div className="token-div">
                <h2>Tu n'est pas connecté, connecte toi ou vérifie ton email pour voir cette article</h2>
                <Link to="/">Se connecter</Link> ou {' '}
                <Link to="/register">S'inscrire</Link>
            </div>
		</div>
	</div>
  );
}
