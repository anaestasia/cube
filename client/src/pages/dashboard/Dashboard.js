import React from "react";
import { Link } from 'react-router-dom';
import Ressource from '../../components/ressource/Ressource';
import MenuFilter from '../../components/menu/MenuFilter/MenuFilter';
import {Checkbox} from 'semantic-ui-react'
import MenuUser from "../../components/menu/MenuUser/MenuUser";


export default function DashBoard() {

  return (
    <div>
      <Ressource />
      <MenuFilter />
      <ul>
        <li><i class="fas fa-user"></i> <Checkbox label={{ children: 'Soi' }} /></li>
        <li><i class="fas fa-heart"></i> <Checkbox label={{ children: 'Conjoints' }} /></li>
        <li><i class="fas fa-briefcase"></i> <Checkbox label={{ children: 'Professionelles' }} /></li>
        <li><i class="fas fa-users"></i> <Checkbox label={{ children: 'Famille' }} /></li>
      </ul>
      

      <Link to="/main">main menu</Link> 
    </div>
  );
}