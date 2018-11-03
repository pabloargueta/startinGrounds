import React, { Component } from 'react';
import NavBar from './NavBar'
import SignIn from './SignIn'

import { connect } from 'react-redux'


class Welcome extends Component {




  render() {
    return (
      <div>
        <NavBar />
        <SignIn />
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    state: state.testStatels

  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateProduct: (data) => dispatch({ type: "", payload: data })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
