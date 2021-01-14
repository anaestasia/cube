import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Le formulaire est soumis: ' + this.state.value);
    event.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email :
          <i class="fas fa-at"></i>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label><br/>
        <label>
          Mot de passe :
          <i class="fas fa-unlock-alt"></i>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label><br/>
        <button type="button">Se connecter</button>
      </form>
    );
  }
}

export default Form;