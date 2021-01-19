import React, { Component } from 'react'


class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options : [
                { value: 'article', label: 'Article' },
                { value: 'atelier', label: 'Atelier' },
                { value: 'vidéo', label: 'Vidéo' }
            ]
        };
    }

    render () {
        return <Select options={this.props.options} />;
    }
}
export default Select;