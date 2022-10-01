import React, { Component } from "react";
import { capitalize } from "lodash";

class TextDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.content)
    return (
      <div>
        {this.props.content.map((field, i) => {
        return (
          <div className="field" key={i}>
            <h3>{capitalize(field.name)}</h3>
            <p>{field.value}</p>
          </div>
        )
        })}
      </div>
    );
  }
}

export default TextDisplay;
