import React, { Component } from 'react';
import PreferenceForm from '../PreferenceForm';
import TabNavigation from './TabNavigation.js';

class PreferenceTab extends Component {
  render() {
    return (
      <React.Fragment>
        <TabNavigation value={2} />
        <PreferenceForm />
      </React.Fragment>
    );
  }
}

export default PreferenceTab;
