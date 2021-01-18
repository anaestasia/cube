import React, { Component } from 'react';
import './MenuFilter.css';
import ReactWidgets, { Combobox } from 'react-widgets';
import Dropdown from 'react-widgets'


class MenuFilter extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            Combobox: ReactWidgets,
            typeRessource: ['Intelligence Émotionnelle', 'Monde professionnel', 'Communication']
        };
    }

    render() {
        return (
            <div className = "combobox">  <i class="fas fa-folder-open"></i> Catégorie
            <Combobox
            data={['Intelligence Émotionnelle', 'Monde professionnel', 'Communication']}
            defaultValue={"Communication"}
            />
            <br />
            <i class="fas fa-file-alt"></i> Type de ressource
            <Combobox
            data={['Vidéo', 'Atelier', 'Article']}
            defaultValue={"Exercice"}
            />

            </div>    
        );
    }
}
export default MenuFilter;