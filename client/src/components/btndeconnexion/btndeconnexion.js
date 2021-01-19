import Axios from "axios";

export default function BtnDeconnexion() {


    Axios.defaults.withCredentials = true;

    const deco = () => {
        Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/logout").then((response) => {
            if (response.data.destroy === true) {
            window.location.href = "/";
            }
        });
        }
   
    return (
        <div>
            <button onClick={deco}>déconnexion</button>
        </div>
    );
}