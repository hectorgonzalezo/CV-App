import React, { Component } from "react";
import InputField from './InputField';
import uniquid from "uniqid";

// These represent the cv fields when asking for an input

class InputMultiple extends Component {
  constructor(props) {
    super(props);

    this.state = {fields: []};
    this.addInputField = this.addInputField.bind(this);
    this.deleteButtonFunc = this.deleteButtonFunc.bind(this);
  }

  // Deletes the current InputField
  deleteButtonFunc(e){
    this.setState(previousState => ({
        fields: previousState.fields.filter(field => field.id !== e.target.id)
    }))
  }


  addInputField(){
    this.setState(previousState => ({
        fields: previousState.fields.concat({id: uniquid()})
    })
    )
  }

  render() {
    return (
        <div>
            <h2>{this.props.title}</h2>
            {this.state.fields.map(field => {
                return (
                    <InputField
                        key={field.id}
                        keyNum={field.id}
                        className={`${this.props.id}Field`}
                        fields={this.props.fields}
                        deleteButtonFunc={this.deleteButtonFunc}
                    />
                )
            })}
            <button className='addButton' onClick={this.addInputField}>+</button>
        </div>
    )
  }
}

export default InputMultiple;
