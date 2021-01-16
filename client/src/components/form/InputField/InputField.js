import React, { Component } from 'react';
import './InputField.css';

class InputField extends Component {
  
  render() {
    return (
        <div class="input-field">
            <label>Email :</label>
            <i class="fas fa-at"></i>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
        </div>
    );
  }

}

export default InputField;