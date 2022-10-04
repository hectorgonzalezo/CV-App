import React from 'react';
import Header from './components/Header'
import CV from './components/CV';
import Footer from './components/Footer'
import './styles/appStyle.css';


function App(){
  return (
    <div className="App">
      <Header />
      <CV />
      <Footer projectName="CV-App" />
    </div>
  );
}

export default App;
