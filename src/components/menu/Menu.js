import React, { Component } from 'react';

class Menu extends Component {

render() {
        return (
            <div class="main-menu">
                <ul>
                    <li>Tableau de bord</li>
                    <li>Mes publications</li>
                    <i class="fas fa-users"></i><li>Liste d'amis</li>
                </ul>
            </div>
        );
    }
}

export default Menu;