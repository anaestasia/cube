import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {

render() {
        return (
            <div class="main-menu">
                <ul>
                    <li><i class="fas fa-home"></i> Accueil</li>
                    <li><i class="fas fa-tachometer-alt"></i> Tableau de bord</li>
                    <li><i class="far fa-file-alt"></i>Ressources</li>
                    <li><i class="fas fa-user-cog"></i> Mon profil</li>
                </ul>
            </div>
        );
    }
}

export default Menu;