import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello Abhinay</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="btn-group">
  <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Action <span className="caret"></span>
  </button>
  <ul className="dropdown-menu">
    <li><a href="#adasfd">Action</a></li>
    <li><a href="#asfasf">Another action</a></li>
    <li><a href="#afasf">Something else here</a></li>
    <li role="separator" className="divider"></li>
    <li><a href="#asfasf">Separated link</a></li>
  </ul>
</div>
      </div>

    );
  }
}

export default App;
