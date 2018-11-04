import React, { Component } from 'react';
import ProfileQuestionForm from '../ProfileQuestionForm'
import TabNavigation from './TabNavigation.js'


class ProfileTab extends Component {

  render() {
    return (
        <React.Fragment>
            <TabNavigation value={1} />
            <ProfileQuestionForm />
        </React.Fragment>
    );
  }
}

export default ProfileTab
