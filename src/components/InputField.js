import React, { Component } from "react";
import Input from "./Input";
import TextDisplay from "./TextDisplay";
import uniquid from "uniqid";

// These represent the cv fields when asking for an input

class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = { display: false };
    this.updateTextValue = this.updateTextValue.bind(this);
    this.changeToDisplay = this.changeToDisplay.bind(this);
    this.getCorrectType = this.getCorrectType.bind(this);
    this.addDeleteButton = this.addDeleteButton.bind(this);
    this.getDisplayContent = this.getDisplayContent.bind(this);
  }

  // Create state based on every field received by props
  // These will store the value of every Textinput
  componentDidMount() {
    this.props.fields.forEach((field) => {
        const id = uniquid();
      this.setState({
        [`${field}Value`]: "",
        [`${field}ID`]: id,
      });
    });
  }

  // Updates the state with the new text value written in TextInput
  updateTextValue(e) {
    const fieldName = e.target.name.match(/[a-z]+/)[0];
    this.setState({
      [`${fieldName}Value`]: e.target.value,
    });
  }

  // Formats the content to be sent do display
  getDisplayContent(){
    let stateKeys = Object.keys(this.state);
    stateKeys = stateKeys.filter(key => key.includes('Value'))
    stateKeys = stateKeys.map(key => {
        const name = key.toString().match(/[a-z]+/)[0];
        console.log(this.state[key])
        const value = this.state[key]
        return { name, value }
    })
    return stateKeys
  }

  // Switches from input to display the info typed by user
  // This function is called by the "Submit" button
  changeToDisplay() {
    this.setState((previousState) => ({ display: !previousState.display}));
  }

  // Makes a delete button to be used by experience and education subfields
  addDeleteButton(className){
    if(className === 'experienceField' || className === 'educationField'){
        return <button  id={this.props.keyNum} onClick={this.props.deleteButtonFunc}>Delete</button>
    }
  }

  // finds the right type for input based on fieldName
  getCorrectType(fieldName){
    switch(fieldName){
        case 'from':
        case 'to':
            return 'date';
        case 'email':
            return 'email';
        case 'phone':
            return 'tel'
        default:
            return 'text'
    }
  }

  render() {
    // Input mode
    if (this.state.display === false) {
      return (
        <div id={this.props.id}>
          {this.props.fields.map((fieldName, i) => {
            return (
              <Input
                key={i}
                type={this.getCorrectType(fieldName)}
                name={fieldName}
                value={this.state[`${fieldName}Value`]}
                changeFunc={this.updateTextValue}
              />
            );
          })}
          <button onClick={this.changeToDisplay}>Submit</button>
          {}
        </div>
      );
    } else {
        //display mode
        return (
            <div id={this.props.id}>
                  <TextDisplay content={this.getDisplayContent()} />
              <button onClick={this.changeToDisplay}>Edit</button>
                {this.addDeleteButton(this.props.className)}
            </div>
          );    
    }
  }
}

export default InputField;
