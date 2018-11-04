import React, { Component } from 'react';
import NavBar from './NavBar'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'


import { connect } from 'react-redux'
import LogIn from './LogIn';
import SignUp from './SignUp';
import Profile from './Profile'
import PrivateRoute from './PrivateRoute'
import ProfileQuestionForm from './ProfileQuestionForm'


class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/test" component={ProfileQuestionForm} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/" render={() => <Redirect to={{
              pathname: '/profile'
            }} />} />
          </Switch>
        </Router>
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
