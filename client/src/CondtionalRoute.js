import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

class ConditionalRoute extends Component {
  render() {
    const { condition, fallback, component, ...rest } = this.props
    return (
      <Route {...rest} render={() => {
        const Component = component
        if (condition) return <Component />
        else return (
          <Redirect to={{
            pathname: fallback
          }} />
        )
      }} />
    )
  }
}


export default (ConditionalRoute)