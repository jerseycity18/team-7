import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';


export default class MatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { match: { params: { userId } } } = this.props;
    fetch(`/api/user/${userId}/matches`)
      .then(res => res.json())
      .then(matches => this.setState({ matches }));
  }

  render() {
    if(!this.state.matches) {
      return <div>Loading user</div>
    }
    return (
      <div>
        <h3>Top Matches</h3>
        {this.state.matches.map(({ firstName, lastName, communication, location, interests, matchScore }, index) => 
          <Card key={index}>
            <CardTitle title={`${firstName} ${lastName}`} subtitle={`match score: ${matchScore}`}/>
            <CardText>
              Interests: {interests.join(',')}<br/>
              Location: {location}
            </CardText>
          </Card>)}
      </div>
    );
  }
}
