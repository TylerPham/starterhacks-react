import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TableExampleSimple from './TableExampleSimple';

import usersListPanel from './usersListPanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Alarm Race</h1>
        </header>
        <MuiThemeProvider>


        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <RaisedButton>Yesss</RaisedButton>
        <TableExampleSimple></TableExampleSimple>
        <usersListPanel></usersListPanel>
        
        </MuiThemeProvider>
        </div>
    );
  }
}

export default App;
