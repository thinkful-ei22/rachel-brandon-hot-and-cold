import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <Header />
        </header>
        <main>
        <h1 className="App-title">Hot Or Cold</h1>

        </main>
      </div>
    );
  }
}

export default App;
