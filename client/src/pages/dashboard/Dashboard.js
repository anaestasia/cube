<<<<<<< HEAD
import "./Accueil.css";
import LoginForm from '../components/form/LoginForm';
=======
import React from "react";
>>>>>>> 2c7b7cb618b3e84ec3a16c4baa55077f121d8cdb
import { Link } from 'react-router-dom';
import Ressource from '../../components/ressource/Ressource';
import MenuFilter from '../../components/menu/MenuFilter/MenuFilter';
import CommentButton from "../../components/button/CommentButton/CommentButton";
import MultipleSelector from "../../components/button/multipleselector/MultipleSelector";
import RessourceButton from "../../components/button/RessourceButton/RessourceButton";


export default function DashBoard() {

  return (
    <div>
      <Ressource />
      <MenuFilter />
      <CommentButton/>
      <RessourceButton />
      <MultipleSelector />
      <Link to="/main">main menu</Link> 
    </div>
  );
}