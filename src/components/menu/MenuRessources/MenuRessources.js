import React, { Component } from 'react';
import './MenuRessources.css';


class MenuRessources extends Component {
  
    render() {
        return (
            <li><i class="fas fa-user"></i>Ressources
                <ul>
                    <li><i class="fas fa-tachometer-alt"></i>RESSOURCES
                        <ul>
                            <li>Créer une ressource</li>
                            <li>Consulter le catalogue</li>
                        </ul>
                    </li>
                </ul>
            </li>
        );
    }
}
export default MenuRessources;