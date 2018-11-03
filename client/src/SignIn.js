import React, { Component } from 'react';
import NavBar from './NavBar'
import SignUp from './SignUp'

import { connect } from 'react-redux'


class SignIn extends Component {




  render() {
    return (
      <div>
        <NavBar />
        <SignUp />
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


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
