import React, { Component } from 'react';

class TextDisplay extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div key={this.props.keyID}>
            <h2>{this.props.content}</h2>
            </div>
        )
    }

}

export default TextDisplay