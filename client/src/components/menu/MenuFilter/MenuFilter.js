import React, { Component } from 'react';
import './MenuFilter.css';
import ReactWidgets, { Combobox } from 'react-widgets';
import Select from '../../form/select/Select';


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
            <div className = "combobox"> 

            <i class="fas fa-file-alt"></i> Catégorie
            <br/>
                <select name="catégorieressource" id="catégorie-ressource">
                    <option value="">--Sélectionner la catégorie--</option>
                    <option value="intelligenceemotionelle"> intelligence Emotionelle</option>
                    <option value="mondeprofessionel"> Monde Professionel</option>
                    <option value="communication"> Communicaton </option>
                </select>
            <br/><br/>
            <i class="fas fa-file-alt"></i> Type de ressource
                <br />
                <select name="typeressource" id="type-ressource">
                    <option value="">--Sélectionner le type de ressource--</option>
                    <option value="article"> Article</option>
                    <option value="atelier"> Atelier</option>
                    <option value="vidéo"> Vidéo</option>
                </select>

            </div>    
        );
    }
}
export default MenuFilter;