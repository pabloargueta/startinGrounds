import React, { Component } from 'react';
import ProfileAnswerForm from '../ProfileAnswerForm';
import TabNavigation from './TabNavigation.js';

class ProfileTab extends Component {
  render() {
    return (
      <React.Fragment>
        <TabNavigation value={1} />
        <ProfileAnswerForm />
      </React.Fragment>
    );
  }
}

export default ProfileTab;
