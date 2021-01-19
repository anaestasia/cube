import "./Accueil.css";
import LoginForm from '../components/form/LoginForm';
import { Link } from 'react-router-dom';
import Ressource from '../components/ressource/Ressource';
import MenuFilter from "../components/menufilter/MenuFilter";

// import NormalUser from "../components/NormalUser";
// import Mod from "../components/Mod";
// import Admin from "../components/Admin";

export default function DashBoard() {

  return (
    <div>
      {/* mettre icone */}
      <LoginForm />
      <Ressource />
      <MenuFilter />
      <Link to="/main">main menu</Link> {/* ton logo pour entrer dans le site */}
     
    </div>
  );
}
