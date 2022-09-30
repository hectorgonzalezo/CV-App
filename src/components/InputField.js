import React, { Component } from "react";
import TextInput from "./TextInput";
import TextDisplay from "./TextDisplay";
import uniquid from "uniqid";

// These represent the cv fields when asking for an input

class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = { display: false };
    this.updateTextValue = this.updateTextValue.bind(this);
    this.changeToDisplay = this.changeToDisplay.bind(this);
  }

  // Create state based on every field received by props
  // These will store the value of every Textinput
  componentDidMount() {
    this.props.fields.forEach((field) => {
      this.setState({
        [`${field}Value`]: "",
        [`${field}ID`]: uniquid(),
      });
    });
  }

  // Updates the state with the new text value written in TextInput
  updateTextValue(e) {
    const fieldName = e.target.name.match(/[a-z]+[^Input]/);
    this.setState({
      [`${fieldName}Value`]: e.target.value,
    });
  }

  // Switches from input to display the info typed by user
  // This function is called by the "Submit" button
  changeToDisplay() {
    this.setState((previousState) => ({ display: !previousState.display}));
  }

  render() {
    // Input mode
    if (this.state.display === false) {
      return (
        <div>
          <h2>{this.props.type}</h2>
          {this.props.fields.map((fieldName) => {
            return (
              <TextInput
                key={this.state[`${fieldName}ID`]}
                name={fieldName}
                value={this.state[[`${fieldName}Value`]]}
                changeFunc={this.updateTextValue}
              />
            );
          })}
          <button onClick={this.changeToDisplay}>Submit</button>
        </div>
      );
    } else {
        //display mode
        return (
            <div>
              <h2>{this.props.type}</h2>
              {this.props.fields.map((fieldName) => {
                return (
                  <TextDisplay
                  key = {this.state[`${fieldName}ID`]}
                    content={this.state[[`${fieldName}Value`]]}
                  />
                );
              })}
              <button onClick={this.changeToDisplay}>Edit</button>
            </div>
          );    
    }
  }
}

export default InputField;
