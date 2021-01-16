import React, { Component } from 'react';
import './Menu.css';
import MenuUser from './MenuUser/MenuUser';
import MenuRessources from './MenuRessources/MenuRessources';
import MenuBackOffice from './MenuBackOffice/MenuBackOffice';

class Menu extends Component {

render() {
        return (
            <div class="main-menu">
                <ul>
                    <MenuUser />
                    <MenuRessources />
                    <MenuBackOffice />
                </ul>
            </div>
        );
    }
}

export default Menu;