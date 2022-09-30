import React, { Component } from "react";
import InputField from "./InputField";
import uniqid from "uniqid";

class Input extends Component {
  constructor() {
    super();
    // If a field is active, it means that its in its input mode

    this.clickSubmit = this.clickSubmit.bind(this);
  }

  clickSubmit(e) {
    // Update info and deactivate general input
    console.log('si')
  }
  render() {
    return (
      <div className="App">
        <InputField
          type="General"
          fields={["name", "email", "phone", "address"]}
          submitFunc={this.clickSubmit}
        />
        <InputField
          type="Education"
          fields={["university", "city", "degree", "subject", "from", "to"]}
        />
        <InputField
          type="Experience"
          fields={["company", "position", "city", "from", "to"]}
        />
      </div>
    );
  }
}

export default Input;
