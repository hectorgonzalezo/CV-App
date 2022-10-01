import React, { Component } from "react";
import { format } from 'date-fns';

class TextDisplay extends Component {
  constructor(props) {
    super(props);
    this.formatDate = this.formatDate.bind(this);
  }

  formatDate(date){
    return format(new Date(date),  'MMMM yyyy')
  }

  render() {
    // render education and experience elements
    if(this.props.type === 'educationField'){
        const { university, city, degree, subject, from, to } = this.props.content;
        return(
            <div className="right-side-field">
                <div>
                    <h4>{`${this.formatDate(from)} - ${this.formatDate(to)}`}</h4>
                    <h3 className='degree'>{degree}</h3>
                </div>
                <div>
                    <h3 className="university">{university}</h3>
                    <h4 className="city">{city}</h4>
                </div>
            </div>
        )
    } else if(this.props.type === 'experienceField'){
        const { company, city, position, from, to } = this.props.content;
        return(
            <div className="right-side-field">
                <div>
                <h4>{`${this.formatDate(from)} - ${this.formatDate(to)}`}</h4>
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
        {Object.keys(this.props.content).map((fieldName, i) => {
        return (
            <p key={i}>{this.props.content[fieldName]}</p>
        )
        })}
      </div>
    );
  }
}

export default TextDisplay;
