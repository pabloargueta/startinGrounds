import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom'


class TabNavigation extends Component {

  render(){
    return (
    <Tabs value={this.props.value}>
      <Link style={{color:'initial', textDecoration:'none'}} to="/1"><Tab label="General" /></Link>
      <Link style={{color:'initial', textDecoration:'none'}} to="/2"><Tab label="Profile" /></Link>
      <Link style={{color:'initial', textDecoration:'none'}} to="/3"><Tab label="Preferences" /></Link>
    </Tabs>
    )
  }
} 

export default TabNavigation