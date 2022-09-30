import React, { Component } from 'react';

class TextDisplay extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
            <h2>{this.props.name}</h2>
                <p>{this.props.content}</p>
              </div>
        )
    }

}

export default TextDisplay