import React, { Component } from 'react';
import { capitalize } from 'lodash';

class Input extends Component {
    constructor(props){
        super(props);
    }


    render(){
        console.log(this.props.type==='moth'? "2019-05" : undefined)
      return (
              <div className='field'>
                <label htmlFor={`${this.props.name}Input`}>{capitalize(this.props.name)}</label>
                <input
                  type={this.props.type}
                  name={`${this.props.name}Input`}
                  id={`${this.props.name}Input`}
                  className={this.props.className}
                  onChange={this.props.changeFunc}
                  placeholder={this.props.name}
                  required
                />
              </div>

      );
    }

}

export default Input