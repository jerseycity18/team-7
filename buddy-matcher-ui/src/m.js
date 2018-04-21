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

        <div>
        <label for="type">
	        Buddy
	        </label>
	        <input name="type" value="buddy" type="radio"/>


	        <label for="type">
	        Volunteer
	        </label>
	        <input name="type" value="vol" type="radio"/>

			</div>
			<div>
        	<label for="name">
	        Name
	        </label>
	        <input name="name" type="text"/>
			</div>
			<div>
	        <label for="location">
	        location
	        </label>
	        <input name="location" type="text"/>

	        </div>
			<div>
			

	        <label for="gender">
	        gender
	        </label>
	        

	        <label for="gender">
	        Male
	        </label>
	        <input name="gender" value="male" type="radio"/>
	        <label for="gender">
	        Female
	        </label>
	        <input name="gender" value="female" type="radio"/>

	        </div>


			<h2>Hobbies/Interest
			</h2>
	    <h3>Rate your interest from 1-10</h3>
	    
			<div>    
		        <label for="art">
		        Art
		        </label>
		        <input name="art" type="checkbox"/>

	        </div>
			<div>
	  


		        <label for="sci">Science</label>
		        <input name="sci" type="checkbox"/>


	        </div>
			<div>
	  
		        <label for="skiing">
		        Skiing
		        </label>
		        <input name="skiing" type="checkbox"/>
	        
			</div>

	  
	        <input type="submit"/>


        </form>
        
      </div>
    );
  }
}

export default UserForm;