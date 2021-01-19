import React, { Component } from 'react';
import './MenuFilter.css';

class MenuFilter extends Component {

    render() {
        return (
            <div className = "combobox"> 

                <span><i class="fas fa-file-alt"></i> Catégorie</span>

                <select name="catégorie-ressource" id="catégorie-ressource">
                    <option value="">--Sélectionner la catégorie--</option>
                    <option value="intelligenceemotionelle"> intelligence Emotionelle</option>
                    <option value="mondeprofessionel"> Monde Professionel</option>
                    <option value="communication"> Communicaton </option>
                </select>
                    
                
                <span><i class="fas fa-file-alt"></i> Type de ressource</span>

                <select name="type-ressource" id="type-ressource">
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