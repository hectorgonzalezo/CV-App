import React, { Component } from 'react';
import TextInput from './TextInput';

class InputField extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div>
            <h2>{this.props.type}</h2>
                {this.props.fields.map(fieldName => {
                    return <TextInput name={fieldName} />
                })}
            </div>
        )
    }

}

export default InputField