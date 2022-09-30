import React, { Component } from 'react';
import githubLogo from '../assets/github-logo.png';

class Footer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <footer>
                <h2>Héctor González Orozco</h2>
                <a href={`https://github.com/hectorgonzalezo/${this.props.projectName}`}>
                    <img alt="github logo" id="github-logo" src={githubLogo} />
                </a>
            </footer>
        )
    }
}

export default Footer