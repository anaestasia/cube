import React, { Component } from "react";
import './RessourceButton.css';

class RessourceButton extends Component {

    render() {
        return (
            <div className="comment">
                <span> <i class="fas fa-ellipsis-v"></i> </span>
                <ul>
                    <li><i class="fas fa-edit"></i> Modifier le commentaire </li>
                    <li><i class="fas fa-trash-alt"></i> Supprimer le commentaire </li>
                </ul>
            </div>
        );
    }
}
export default RessourceButton;