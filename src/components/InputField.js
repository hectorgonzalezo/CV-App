import React, { useState, useEffect } from "react";
import Input from "./Input";
import TextDisplay from "./TextDisplay";
import uniquid from "uniqid";

// These represent the cv fields when asking for an input

function InputField(props) {
  const [display, setDisplay] = useState(false);
  const [fieldsObj, setFieldsObj] = useState({});

  // Create state based on every field received by props
  // These will store the value of every Textinput

  useEffect(() => {
    props.fields.forEach((field) => {
        const id = uniquid();
        setFieldsObj((prevObj) => ({...prevObj, [field]:{value: '', id}})
        )
    }); 
  }, []);

  // Updates the state with the new text value written in TextInput
  function updateTextValue(e) {
    if(!e.target.validity.valid){
        e.target.classList.add('invalid')
    } else{
        e.target.classList.remove('invalid')
    }
    const fieldName = e.target.name.match(/[a-z]+/)[0];
    setFieldsObj({...fieldsObj,
      [fieldName]: {value: e.target.value, id:fieldsObj[fieldName].id}
    });
  }

  // Formats the content to be sent do display
  function formatDisplayContent(){
    let stateKeys = Object.keys(fieldsObj);
    const valuesObj = {};
    stateKeys.forEach(key => {
        valuesObj[key] = fieldsObj[key].value
    })
    return valuesObj
  }

  // Switches from input to display the info typed by user
  // function is called by the "Submit" button
  function changeToDisplay(e) {
    // If the form is valid, or if parent isn't form at all, change between views.
    if(e.target.parentElement.tagName === 'DIV' || e.target.parentElement.checkValidity()) {
    e.preventDefault();
    setDisplay(!display)
    }
  }

  // Makes a delete button to be used by experience and education subfields
  function addDeleteButton(className){
    if(className === 'experienceField' || className === 'educationField' || className === 'skillsField'){
        return <button  id={props.keyNum} onClick={props.deleteButtonFunc}>Delete</button>
    }
  }

  // finds the right type for input based on fieldName
  function getCorrectType(fieldName){
    switch(fieldName){
        case 'from':
        case 'to':
            return 'month';
        case 'email':
            return 'email';
        case 'phone':
            return 'tel';
        default:
            return 'text';
    }
  }

    // Input mode
    if (display === false) {
      return (
        <div id={props.id}>
            <form >
             {props.title!== undefined? <h2 className='title'>{props.title}</h2> : null}
              {props.fields.map((fieldName, i) => {
                return (
                  <Input
                    key={i}
                    type={getCorrectType(fieldName)}
                    name={fieldName}
                    value={Object.keys(fieldsObj).length > 0 ? fieldsObj[fieldName].value :''}
                    changeFunc={updateTextValue}
                  />
                );
              })}
              <input type="submit" value="Save" onClick={changeToDisplay}/>
            </form>
        </div>
      );
    } 
        //display mode
        return (
            <div id={props.id}>
                {props.title!== undefined? <h3 className='title'>{props.title}</h3> : null}
                  <TextDisplay type={props.className} content={formatDisplayContent()} />
                <button  className='edit-button' onClick={changeToDisplay}>Edit</button>
                {addDeleteButton(props.className)}
            </div>
          );    
}

export default InputField;
