import React, { Component } from 'react';
import NavBar from './NavBar'
import Welcome from './Welcome'

import { connect } from 'react-redux'


class App extends Component {




  render() {
    return (
      <div>
        <NavBar />
        <Welcome />
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


export default connect(mapStateToProps, mapDispatchToProps)(App);
