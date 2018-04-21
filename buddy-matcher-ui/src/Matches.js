import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';


const dummyMatches = [
  { firstName: 'John', lastName: 'Doe', communication: 1, location: '961 Leigh Mill Road, Great Falls, VA', interestsInCommon: ['Watching TV', 'Cooking'], otherInterests: ['Skiing'], matchScore: 5 },
  { firstName: 'Jane', lastName: 'Doe', communication: 1, location: '456 Paramount Park Drive, Gaithersburg, MD', interestsInCommon: ['Watching TV', 'Cooking'], otherInterests: ['Bicycle Riding'], matchScore: 5 },
  { firstName: 'Idris', lastName: 'Smith', communication: 2, location: '88th Street, Queens, NY', interestsInCommon: ['Watching TV', 'Cooking'], otherInterests: ['Skiing'], matchScore: 3 },
];

const dummyProfile = 
  { firstName: '', lastName: 'Doe', communication: 2, location: '961 Leigh Mill Road, Great Falls, VA', interests: ['Watching TV', 'Cooking'], };

export default class MatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { match: { params: { userId } } } = this.props;
    this.setState({ matches: dummyMatches });
    /**fetch(`/api/user/${userId}/matches`)
      .then(res => res.json())
      .then(matches => this.setState({ matches }))*/
  }

  render() {
    if(!this.state.matches) {
      return <div>Loading user</div>
    }
    return (
      <div>
        <h3>Person to Match</h3>
          <Card>
            <CardTitle title={`${dummyProfile.firstName} ${dummyProfile.lastName}`} subtitle={`match score: ${dummyProfile.matchScore}`}/>
            <CardText>
              Location: {dummyProfile.location}<br/>
              Interests: {dummyProfile.interests.join(',')}<br/>
              Communication Preference: {dummyProfile.communication == 1 ? 'text': 'in-person'}
            </CardText>
          </Card>
        <h3>Top Matches</h3>
        {this.state.matches.map(({ firstName, lastName, communication, location, interestsInCommon, otherInterests, matchScore }, index) => 
          <Card key={index}>
            <CardTitle title={`${firstName} ${lastName}`} subtitle={`match score: ${matchScore}`}/>
            <CardText>
              Location: {location}<br/>
              Interests in Common: {interestsInCommon.join(',')}<br/>
              Other Interests: {interestsInCommon.join(',')}<br/>
              Communication Preference: {communication == 1 ? 'text': 'in-person'}
            </CardText>
          </Card>)}
      </div>
    );
  }
}
