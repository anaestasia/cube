import React, { Component } from 'react';
import './MenuUser.css';


class MenuUser extends Component {
  
    render() {
        return (
            <li> Gestion du Profil
                <ul>
                    <li><i class="fas fa-tachometer-alt"></i> TABLEAU DE BORD
                        <ul>
                            <li class="sous-titre">Mes ressources</li>
                            <li class="sous-titre">Mes favoris</li>
                        </ul>
                    </li>

                    <li><i class="fas fa-address-card"></i> MON PROFIL
                        <ul>
                            <li >Modifier mon profil</li>
                            <li class="logout">Déconnexion</li>
                        </ul>
                    </li>
                </ul>
            </li>
        );
    }
}
export default MenuUser;