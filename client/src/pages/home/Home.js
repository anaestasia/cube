import LoginForm from "../../components/form/LoginForm/LoginForm";
import React from "react";
import { Link } from 'react-router-dom';
import * as RiIcons from "react-icons/ri";
import * as ImIcons from "react-icons/im";
import Axios from "axios";

// import Axios from "axios";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Home.css";

export default function Home({ onSubmit, formValue, onChange, connected }) {
  // const [role, setRole] = useState("");

  // Axios.defaults.withCredentials = true;
  // useEffect(() => {
  //   Axios.get(process.env.REACT_APP_SITE_URL_API + "/users/login").then(
  //     (response) => {
  //       if (response.data.loggedIn === true) {
  //         setRole(response.data.user[0].fk_role);
  //       }
  //     }
  //   );
  // }, []);

  Axios.defaults.withCredentials = true;

    const deco = () => {
        Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/logout").then((response) => {
            if (response.data.destroy === true) {
            window.location.href = "/";
            }
        });
        }

  return (
    <div className="home">
      <Row>
      
        <Col sm={12} md={12} xl={12}>
          <div className="logo-home">
            <img
              src="/img/logo/logo_ressources_relationnelles_transparent.png"
              className="App-logo-menu"
              alt="logo"
            />
          </div>
        </Col>

        {!connected ? (
          <Col sm={12} md={6} xl={6} className="form-login">
            <LoginForm
              onSubmit={onSubmit}
              onChange={onChange}
              formValue={formValue}
            />
          </Col>
        ) : (
          <Col sm={12} md={6} xl={6} className="form-login">
            <RiIcons.RiLogoutBoxLine />
            <Link onClick={deco}>Déconnexion</Link>
          </Col>
        )}
        

        <Col sm={12} md={6} xl={6} className="btn-discover">
          <ImIcons.ImEnter />
          <Link to="/catalog">Découvrir</Link>
        </Col>

      </Row>
    </div>
  );
}
