import Header from './components/Header'
import CV from './components/CV';
import Footer from './components/Footer'
import './styles/appStyle.css';
import React, { Component } from 'react';




class App extends Component{
    constructor(props){
        super(props);
    }


    render() {
  return (
    <div className="App">
      <Header />
      <CV />
      <Footer projectName="CV-App" />
    </div>
  );
    }
}

export default App;
