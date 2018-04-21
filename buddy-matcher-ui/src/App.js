import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MatchList from './Matches';
import logo from './logo.svg';
import './App.css';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import UserForm from './m.js';

class Login extends Component {
  render() {
    return <p>Hello world</p>
  }
}

const toMatchDemo = [
  {name: 'foo', hasIdd: true , type: 'buddy'},
  {name: 'bar', hasIdd: false, type: 'volunteer'},
];

class ProfileItem extends Component {
  render() {
    return (
      <div>
        <b>{this.props.name}</b> {(this.props.hasIdd) ? "has id" : "does not have idd"}
      </div>
    );
  }
}

class ProfileList extends Component {
  constructor(props) {
    super(props);
    this.state = { toMatch: toMatchDemo }; //TODO: remove dummy data
  }

  render() {
    console.log("--"+this);
    return (
      <div>
        <h3>Users</h3>
        <List>
        {this.state.toMatch.map(({ name, hasIdd, type }, index) => <ListItem key={index} primaryText={name} rightIcon={type == "buddy" ? <ActionInfo/>: <ContentInbox/>}  />)}
        </List>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>




      <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Buddy Matcher</h1>
            </header>
            <div>
              <Route exact path="/" component={Login} />
              <Route exact path="/admin/profiles" component={ProfileList} />
              <Route exact path="/admin/profiles/:userId/matches" component={MatchList} />
              <Route exact path="/user" component={UserForm} />
            </div>
          </div>
      </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
