import React, { Component } from 'react';
import './SubmitBtn.css';

class SubmitBtn extends Component {

  constructor(props) {
    super(props);
    this.state = {inputText: ''};
  }
  
  render() {

    return (
        <div className="submit-btn">
            <input type="submit" value={this.props.inputText} />
        </div>
    );
  }

}

export default SubmitBtn;