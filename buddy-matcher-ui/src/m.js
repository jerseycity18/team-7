import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MatchList from './Matches';
import logo from './logo.svg';
import './App.css';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ContentInbox from 'material-ui/svg-icons/content/inbox';



const toMatchDemo = [
  {name: 'foo', hasIdd: true , type: 'buddy'},
  {name: 'bar', hasIdd: false, type: 'volunteer'},
];



class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = { toMatch: toMatchDemo }; //TODO: remove dummy data
  }

  render() {
    console.log("--"+this);
    return (
      <div>
        <h3>Users</h3>
        
        <form>
        	<label for="name">
	        Name
	        </label>
	        <input name="name" type="text"/>

	        <label for="location">
	        location
	        </label>
	        <input name="location" type="text"/>
	        <label for="gender">
	        gender
	        </label>


	    
	        <input name="name" type="text"/>
	        <label for="name">
	        Name
	        </label>
	        <input name="name" type="text"/>
	        <label for="name">
	        Name
	        </label>
	        <input name="name" type="text"/>

	        


        </form>
        
      </div>
    );
  }
}

export default UserForm;