import React, { Component } from "react";
import { capitalize } from "lodash";

class TextDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // render education and experience elements
    if(this.props.type === 'educationField'){
        const { university, city, degree, subject, from, to } = this.props.content;
        return(
            <div className="right-side-field">
                <div>
                    <h4>{`${from}=${to}`}</h4>
                    <h3>{degree}</h3>
                </div>
                <div>
                    <h3>{university}</h3>
                    <h4>{city}</h4>
                    <h4>{subject}</h4>
                </div>
            </div>
        )
    } else if(this.props.type === 'experienceField'){
        const { company, city, position, from, to } = this.props.content;
        return(
            <div className="right-side-field">
                <div>
                    <h4>{`${from}=${to}`}</h4>
                    <h3>{position}</h3>
                </div>
                <div>
                    <h3>{company}</h3>
                    <h4>{city}</h4>
                </div>
            </div>
        )
    } 
    // render name and details
    return (
      <div>
        {Object.keys(this.props.content).map((fieldName, i) => {
        return (
          <div className="field" key={i}>
            <h3>{capitalize(fieldName)}</h3>
            <p>{this.props.content[fieldName]}</p>
          </div>
        )
        })}
      </div>
    );
  }
}

export default TextDisplay;
