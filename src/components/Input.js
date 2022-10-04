import React from 'react';
import { capitalize } from 'lodash';

function Input(props){
  // console.log(props.type ==='month'? "2019-05" : undefined)
  return (
    <div className="field">
      <label htmlFor={`${props.name}Input`}>
        {capitalize(props.name)}
      </label>
      <input
        type={props.type}
        name={`${props.name}Input`}
        id={`${props.name}Input`}
        className={props.className}
        onChange={props.changeFunc}
        placeholder={props.name}
        value={props.value}
        required
      />
    </div>
  );
}

export default Input