import React, { useState } from "react";
import InputField from './InputField';
import uniquid from "uniqid";

// These represent the cv fields when asking for an input

function InputMultiple(props){

  const [fields, setFields] = useState([])

  // Deletes the current InputField
  function deleteButtonFunc(e){
    setFields(fields.filter(field => field.id !== e.target.id))
  }


  function addInputField(){
    setFields([...fields, uniquid()])
  }

    return (
        <div id={props.id}>
            <h2 className="title">{props.title}</h2>
            {fields.map(field => {
                return (
                    <InputField
                        key={field}
                        keyNum={field}
                        className={`${props.id}Field`}
                        fields={props.fields}
                        deleteButtonFunc={deleteButtonFunc}
                    />
                )
            })}
            <button className='addButton' onClick={addInputField}>+</button>
        </div>
    )
}

export default InputMultiple;
