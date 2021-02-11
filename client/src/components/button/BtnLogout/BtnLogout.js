import Axios from "axios";

import './BtnLogout.css'

export default function BtnLogout() {


    Axios.defaults.withCredentials = true;

    const deco = () => {
        Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/logout").then((response) => {
            if (response.data.destroy === true) {
            window.location.href = "/";
            }
        });
        }
   
    return (
        <div className="logout-container">
            <i class="fas fa-sign-out-alt"></i>
            <button onClick={deco} className="btn-logout">Déconnexion</button>
        </div>
    );
}