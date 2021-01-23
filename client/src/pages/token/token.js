import { Link, useParams } from 'react-router-dom';
import React, { useState , useEffect } from "react";
import "./token.css";
import Axios from "axios";

// import NormalUser from "../components/NormalUser";
// import Mod from "../components/Mod";
// import Admin from "../components/Admin";

export default function Token() {

    const [message, setMessage] = useState("");
    let { token } = useParams();
    
    useEffect(() => {
      Axios.post(process.env.REACT_APP_SITE_URL_API+"/users/token",{
            token : token,
        }).then((response) => {
          if (response.data.token === true) {
            setMessage('Votre email a bien était enregistré');
            }
          else
          {
            setMessage("Erreur lors de l'enregristrement");
          }
        });
    }, [token]);

    return (
    <div id="token">
		<div className="token">
			<div className="token-div">
                <h2>{message}</h2>
                <Link to="/main">Retour sur le site</Link>
            </div>
		</div>
	</div>
  );
}
