import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      latitude: "",
      longitude: "",
      userAgent: ""
    };

    this.showLocationAndUserAgent();
  }

  showLocationAndUserAgent = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else { 
      this.setState({
        latitude: "Tu navegador no soporta geolocalización",
        longitude: "Tu navegador no soporta geolocalización"
      });

      this.showAgent();
    }
  }

  showAgent = () => {
    if(navigator.userAgent){
      this.setState({
        userAgent: "User-agent header sent: " + navigator.userAgent
      });
    }else{
      this.setState({
        userAgent: "No se pudo obtener tu user agent"
      });
    }
  }


  showPosition = (position) => {
    this.setState({
      latitude: position.coords.latitude + "",
      longitude: position.coords.longitude + ""
    });

    this.showAgent();
  }

  render() {
    return (
      <div className="App">
        <button
          className="button"
          onClick={this.showLocationAndUserAgent}
        >
          Obtener información
        </button>

        <h1>Ubicación</h1>
        <h4>Latitud</h4>
        <p>{this.state.latitude}</p>

        <h4>Longitud</h4>
        <p>{this.state.longitude}</p>

        <h1>User Agent</h1>
        <h4>{this.state.userAgent}</h4>
      </div>
    );
  }


}

export default App;
