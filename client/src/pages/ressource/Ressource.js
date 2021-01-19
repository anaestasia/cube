import React from "react";
import Menu from "../../components/menu/Menu";
import Ressource from '../../components/ressource/Ressource';
import './Ressource.css';

export default function RessourcePage () {

  return (
    <div className="page">
        <Menu />
        <div className="content-page">
            <Ressource />
            <div className="comments">
                <h2>COMMENTAIRES</h2>
                <div className="comment">

                    <div className="origin">
                        <span>Jean Castex</span>
                        <p className="comm-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a est ante. Duis posuere luctus ullamcorper. Curabitur auctor lorem tristique lacus ornare, convallis rhoncus libero tempus. Suspendisse id orci non nisl ornare luctus.</p>
                    </div>

                    <div className="answer">
                        <span>Emmanuel Macron</span>
                        <p className="comm-text">Lorem ipsum dolor sit amet</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
}