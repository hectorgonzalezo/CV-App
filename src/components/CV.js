import React, { Component } from "react";
import InputField from "./InputField";
import InputMultiple from './InputMultiple';
import Picture from './Picture';

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
        <InputMultiple 
        id='skills' 
        title='Skills'
        fields={['Skill']}
        />
        <InputField
          id='general'
          title="Contact"
          fields={["email", "phone", "address"]}
          submitFunc={this.clickSubmit}
        />
        <InputField
          id="name"
          fields={["name", "title"]}
          />
        <InputMultiple
        id="education"
          title="Education"
          fields={["university", "city", "degree", "from", "to"]}
        />
        <InputMultiple
        id="experience"
          title="Experience"
          fields={["company", "position", "city", "from", "to"]}
        />
      </div>
    );
  }
}

export default CV;
