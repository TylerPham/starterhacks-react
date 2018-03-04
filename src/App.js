import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Material-UI Components
// ----------------------
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import AlarmIcon from 'material-ui/svg-icons/action/alarm';
import ProfileIcon from 'material-ui/svg-icons/social/person';
import DataIcon from 'material-ui/svg-icons/action/timeline';

import RaisedButton from 'material-ui/RaisedButton';

// Custom React Components
// -----------------------
import TableExampleSimple from './TableExampleSimple';
import usersListPanel from './usersListPanel';

const paperStyle={
  height: '100%',
  width: '100%',
  textAlign: 'center',
}

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

        <Paper style={paperStyle}>
          <Tabs>
            <Tab 
              label={"ALARM"}
              icon={<AlarmIcon/>}>
              Hello World
            </Tab>
            <Tab 
              label={"HISTORY"}
              icon={<DataIcon/>}>
              Hello World 2
            </Tab>
            <Tab 
              label={"PROFILE"}
              icon={<ProfileIcon/>}>
              Hello World 3
            </Tab>
          </Tabs>
        </Paper>
        
       </MuiThemeProvider> 
      </div>
    );
  }
}

export default App;
