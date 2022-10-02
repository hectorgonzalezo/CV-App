import React, { Component } from 'react';
import Input from './Input';
import uniquid from 'uniqid';

class Skills extends Component{
    constructor(props){
        super(props);
        this.updateSkill = this.updateSkill.bind(this);
        this.addSkill = this.addSkill.bind(this);
        this.state = {
            [uniquid()]: ''
        }
    }

    // Updates the state
    updateSkill(e){
        const skillID = e.target.classList[0];
        console.log(skillID)
        this.setState({
            [skillID]: e.target.value
        })
    }

    addSkill(e){
        console.log(this.state)
    }

    render(){
        return (
          <div id={this.props.id}>
            <h2>Skills</h2>
            {Object.keys(this.state).map(keyID => {
                return (
                <div key={`${keyID}Div`}>
                    <Input className={keyID} type="text" name='skill' changeFunc={this.updateSkill} value={this.state[keyID]}/>
                    <button onClick={this.addSkill}>Add</button>
                </div>
                )
            }
            )}
          </div>
        );
    }
}

export default Skills