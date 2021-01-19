import React from "react";
import { Link } from 'react-router-dom';
import Ressource from '../../components/ressource/Ressource';
import MenuFilter from "../../components/menufilter/MenuFilter";

export default function DashBoard() {

  return (
    <div>
      <Ressource />
      <MenuFilter />
      <Link to="/main">main menu</Link> {/* ton logo pour entrer dans le site */}
      Un peu de texte test
    </div>
  );
}
