import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MatchList from './Matches';
import logo from './logo.svg';
import './App.css';

class Login extends Component {
  render() {
    return <p>Hello world</p>
  }
}

const toMatchDemo = [
  {name: 'foo', hasIdd: true },
  {name: 'bar', hasIdd: false },
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
    return (
      <div>
        <h3>Ready to Match</h3>
        {this.state.toMatch.map(({ name, hasIdd }, index) => <ProfileItem key={index} name={name} hasIdd={hasIdd} />)}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/admin/profiles" component={ProfileList} />
            <Route exact path="/admin/profiles/:userId/matches" component={MatchList} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
