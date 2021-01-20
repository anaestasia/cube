import React from "react";
import Menu from "../../components/menu/Menu";
import Ressource from '../../components/ressource/Ressource';
import Comment from '../../components/ressource/comment/Comment';
import './Ressource.css';

export default function RessourcePage () {

  return (
    <div className="page">
        <Menu />
        <div className="content-page">
            <Ressource />
            <Comment />
        </div>
    </div>
  );
}