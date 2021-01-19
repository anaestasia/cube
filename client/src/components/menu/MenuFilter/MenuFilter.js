import React, { Component } from 'react';
import './MenuFilter.css';

class MenuFilter extends Component {

    render() {
        return (
            <div className = "combobox"> 

                <span><i class="fas fa-file-alt"></i> Catégorie</span>
                <br/>
                <select name="catégorie-ressource" id="catégorie-ressource">
                    <option value="">--Sélectionner la catégorie--</option>
                    <option value="intelligenceemotionelle"> intelligence Emotionelle</option>
                    <option value="mondeprofessionel"> Monde Professionel</option>
                    <option value="communication"> Communicaton </option>
                </select>
                    
                <br/>
                <span><i class="fas fa-file-alt"></i> Type de ressource</span>
                <br/>
                <select name="type-ressource" id="type-ressource">
                    <option value="">--Sélectionner le type de ressource--</option>
                    <option value="article"> Article</option>
                    <option value="activité-jeu"> Activité / Jeu</option>
                    <option value="carte-défi"> Carte défi</option>
                    <option value="cours-pdf"> Cours au format PDF</option>
                    <option value="exercice-atelier"> Exercice / Atelier</option>
                    <option value="fiche-de-lecture"> Fiche de lecture</option>
                    <option value="jeu-en-ligne"> Jeu en Ligne</option>
                    <option value="vidéo"> Vidéo</option>
                    
                </select>

            </div>    
        );
    }
}
export default MenuFilter;