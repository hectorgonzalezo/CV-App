import React, { Component } from "react";
import InputField from "./InputField";
import InputMultiple from './InputMultiple';
import Picture from './Picture';
import html2pdf from 'html2pdf.js'

class CV extends Component {
  constructor() {
    super();
    // If a field is active, it means that its in its input mode

    this.clickSubmit = this.clickSubmit.bind(this);
    this.exportToPDF = this.exportToPDF.bind(this);
        this.cvRef = React.createRef();
  }

  
    async exportToPDF(){
       const cvDiv = this.cvRef.current;
       const height = Number(window.getComputedStyle(cvDiv).height.match(/\d+/)[0]);
       const width = Number(window.getComputedStyle(cvDiv).width.match(/\d+/)[0]);
       console.log({height, width})
    //    Pass height and width of cv div as sizes for pdf
    var opt = {
        filename:     'CV.pdf',
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  { scale: 1 , width, height},
        jsPDF:        { unit: 'px', format: [width, height], hotfixes: ["px_scaling"]}
      };
    
    // choose the element and pass it to html2pdf() function and call the save() on it to save as pdf.
    html2pdf().set(opt).from(cvDiv).save();
    }

  clickSubmit(e) {
    // Update info and deactivate general input
    console.log('si')
  }
  render() {
    return (
      <div id='cv' ref={this.cvRef}>
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
          fields={["from", "to", "university", "city", "degree"]}
        />
        <InputMultiple
        id="experience"
          title="Experience"
          fields={["from", "to", "company", "position", "city"]}
        />
      <button id="export-button" onClick={this.exportToPDF}>Export to PDF</button>
      </div>
    );
  }
}

export default CV;
