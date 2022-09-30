import React, { Component } from 'react';
import InputField from './InputField';

class Input extends Component {

render() {
  return (
    <div className="App">
    <InputField type="General" fields={['name', 'email', 'phone', 'address']} />
    <InputField type="Education" fields={['university', 'city', 'degree', 'subject', 'from', 'to']} />
    <InputField type="Experience" fields={['company', 'position', 'city', 'from', 'to']} />
    </div>
  );
}
}


export default Input;