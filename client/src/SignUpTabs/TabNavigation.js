import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
class TabNavigation extends Component {
  render() {
    console.log(this.props);

    return (
      <Tabs value={this.props.value}>
        <Link
          style={{ color: 'initial', textDecoration: 'none' }}
          to={`/signup/1`}>
          <Tab label="General" />
        </Link>
        <Link
          style={{ color: 'initial', textDecoration: 'none' }}
          to={`/signup/2`}>
          <Tab label="Profile" />
        </Link>
        <Link
          style={{ color: 'initial', textDecoration: 'none' }}
          to={`/signup/3`}>
          <Tab label="Preferences" />
        </Link>
      </Tabs>
    );
  }
}

export default withRouter(TabNavigation);
