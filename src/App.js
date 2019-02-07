import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './views/navbar';
import BackgroundImages from './views/images';
import Cards from './views/cards';
import Footer from './views/footer';
// import Slider from './views/slider';
import { Alert } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <>
        <Navigation/>
        <BackgroundImages/>
        <div>
          <p style={{fontSize:"35px", margin:"10px",fontWeight: "bold", color: "#000131"}}>Live your best life</p>
        </div>
        <Cards />
        <Footer />
      </>
    );
  }
}

export default App;
