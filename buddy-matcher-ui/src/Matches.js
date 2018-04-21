import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';

export default class MatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { match: { params: { userId } } } = this.props;

  }

  render() {
    if(!this.state.matches) {
      return <div>Loading user</div>
    }
    return (
      <div>
        <List>
          {this.props.matches.map(({ name, userId, score }) => 
            <ListItem primaryText={name} secondaryText={score} />)}
        </List>
      </div>
    );
  }
}
