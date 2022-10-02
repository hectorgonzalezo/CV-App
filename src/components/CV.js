import React, { Component } from "react";
import InputField from "./InputField";
<<<<<<< HEAD
import InputMultiple from './InputMultiple';
import Picture from './Picture';
=======
import InputMultiple from './InputMultiple'
import Picture from './Picture'
import html2PDF from 'jspdf-html2canvas';
>>>>>>> 10cefd1 (Add export to pdf)

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
       const height = window.getComputedStyle(cvDiv).height.match(/\d+/)[0];
       const width = window.getComputedStyle(cvDiv).width.match(/\d+/)[0];
       console.log(height, width)
       // Pass height and width of cv div as sizes for pdf
       await html2PDF(cvDiv, {
        jsPDF: {
          format: [width, height],
        },
        image:{ type: 'jpeg', quality: 1 },
        imageType: 'image/jpeg',
        output: './pdf/CV.pdf'
      })
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
          fields={["university", "city", "degree", "from", "to"]}
        />
        <InputMultiple
        id="experience"
          title="Experience"
          fields={["company", "position", "city", "from", "to"]}
        />
      <button onClick={this.exportToPDF}>Export to PDF</button>
      </div>
    );
  }
}

export default CV;
