import React  from "react";
import { format } from 'date-fns';

function TextDisplay(props){


  function formatDate(date){
    return format(new Date(date),  'MMMM yyyy')
  }

    // render education and experience elements
    if(props.type === 'educationField'){
        const { university, city, degree, from, to } = props.content;
        console.log(from)
        return(
            <div className="right-side-field">
                <div>
                    <h4>{`${formatDate(from)} - ${formatDate(to)}`}</h4>
                    <h3 className='degree'>{degree}</h3>
                </div>
                <div>
                    <h3 className="university">{university}</h3>
                    <h4 className="city">{city}</h4>
                </div>
            </div>
        )
    } else if(props.type === 'experienceField'){
        const { company, city, position, from, to } = props.content;
        return(
            <div className="right-side-field">
                <div>
                <h4>{`${formatDate(from)} - ${formatDate(to)}`}</h4>
                    <h3 className="position">{position}</h3>
                </div>
                <div>
                    <h3 className="company">{company}</h3>
                    <h4 className="city">{city}</h4>
                </div>
            </div>
        )
    } 
    // render name and details
    return (
      <div className='display'>
        {Object.keys(props.content).map((fieldName, i) => {
        return (
            <p key={i}>{props.content[fieldName]}</p>
        )
        })}
      </div>
    );
}

export default TextDisplay;
