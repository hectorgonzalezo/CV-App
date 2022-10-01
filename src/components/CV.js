import React, { Component } from "react";
import InputField from "./InputField";
import Picture from './Picture'

class CV extends Component {
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
      <div id='cv'>
        <Picture />
        <InputField
          id="name"
          type="name"
          fields={["name", "title"]}
          />
        <InputField
          id='general'
          type="General"
          fields={["email", "phone", "address"]}
          submitFunc={this.clickSubmit}
        />
        <InputField
        id="education"
          type="Education"
          fields={["university", "city", "degree", "subject", "from", "to"]}
        />
        <InputField
        id="experience"
          type="Experience"
          fields={["company", "position", "city", "from", "to"]}
        />
      </div>
    );
  }
}

export default CV;
