import React, { Component } from 'react';
import './MenuBackOffice.css';


class MenuBackOffice extends Component {
  
    render() {
        return (
            <div>
                <h2>Back-Office</h2>

                <ul>
                    <li><i class="fas fa-tachometer-alt"></i>UTILISATEURS
                        <ul>
                            <li>Gérer les utilisateurs</li>
                        </ul>
                    </li>
                    <li><i class="fas fa-tachometer-alt"></i>RESSOURCES
                        <ul>
                            <li>Gérer les ressources</li>
                            <li>Gérer les catégories</li>
                            <li>Gérer les commentaires</li>
                        </ul>
                    </li>
                    <li><i class="fas fa-tachometer-alt"></i>DOCUMENTATION
                        <ul>
                            <li>Visiteur</li>
                            <li>Citoyen</li>
                            <li>Modérateurs</li>
                            <li>Administrateur</li>
                        </ul>
                    </li>
                </ul>
                
            </div>
        );
    }
}
export default MenuBackOffice;