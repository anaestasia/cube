import React, { Component } from "react";
import './CommentButton.css';


class CommentButton extends Component {

    render() {
        return (
            <div className="comment">
                <span><i class="fas fa-ellipsis-v"></i></span>
                <ul>
                    <li> Intéragir</li>
                    <li> Répondre </li>
                    <li> Modifier </li>
                    <li> Signaler </li>
                    <li> Supprimer</li>
                </ul>
            </div> 
        );
    }
}
export default CommentButton;