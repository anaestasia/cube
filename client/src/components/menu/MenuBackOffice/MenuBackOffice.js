import React, { Component } from 'react';
import './MenuBackOffice.css';


class MenuBackOffice extends Component {
  
    render() {
        return (
            <li> Back-Office
                <ul>
                    <li><i class="fas fa-users-cog"></i> UTILISATEURS
                        <ul>
                            <li>Gérer les utilisateurs</li>
                        </ul>
                    </li>
                    <li><i class="fas fa-folder-open"></i>  RESSOURCES
                        <ul>
                            <li>Gérer les ressources</li>
                            <li>Gérer les catégories</li>
                            <li>Gérer les commentaires</li>
                        </ul>
                    </li>
                    <li><i class="fas fa-info-circle"></i> DOCUMENTATION
                        <ul>
                            <li>Visiteur</li>
                            <li>Citoyen</li>
                            <li>Modérateur</li>
                            <li>Administrateur</li>
                        </ul>
                    </li>
                </ul>
            </li>
        );
    }
}
export default MenuBackOffice;