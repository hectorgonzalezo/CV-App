import React, { Component } from 'react';
import '../styles/headerStyle.css';

class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <header>
            <h3>CV Creator</h3>
                <p>Place cursor over cv area to show relevant buttons</p>
            </header>
        )
    }
}

export default Header