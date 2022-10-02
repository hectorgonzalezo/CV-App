import React, { Component } from 'react';
import '../styles/headerStyle.css';

class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <header>
                <h1>CV App</h1>
                <p>Hover over cv area to show buttons</p>
            </header>
        )
    }
}

export default Header