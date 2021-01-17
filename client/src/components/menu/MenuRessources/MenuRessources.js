import React, { Component } from 'react';
import './MenuRessources.css';


class MenuRessources extends Component {
  
    render() {
        return (
            <li> Ressources
                <ul>
                    <li><i class="fas fa-folder-open"></i> RESSOURCES
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