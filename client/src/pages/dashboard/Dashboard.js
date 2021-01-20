import React from "react";
import { Link } from 'react-router-dom';
import Ressource from '../../components/ressource/Ressource';
import MenuFilter from '../../components/menu/MenuFilter/MenuFilter';
import CommentButton from "../../components/button/CommentButton/CommentButton";
import MultipleSelector from "../../components/button/multipleselector/MultipleSelector";
import RessourceButton from "../../components/button/RessourceButton/RessourceButton";


export default function DashBoard() {

  return (
    <div>
      <Ressource title= "Réussir au CESi"
            categorie= "Études"
            typeRelation= "Soi"
            typeRessource= "Développement Personnel"
            content="Trop fort"
            media="" />
      <MenuFilter />
      <CommentButton/>
      <RessourceButton />
      <MultipleSelector />
      <Link to="/main">main menu</Link> 
    </div>
  );
}