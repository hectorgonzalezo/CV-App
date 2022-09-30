import React, { Component } from 'react';

class TextInput extends Component {
    constructor(props){
        super(props);
    }


    render(){
      return (
              <div>
                <label htmlFor={`${this.props.name}Input`}>{this.props.name}</label>
                <input
                  type="text"
                  name={`${this.props.name}Input`}
                  id={`${this.props.name}Input`}
                ></input>
              </div>

      );
    }

}

export default TextInput