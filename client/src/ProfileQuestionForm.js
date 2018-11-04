import React, { Component } from 'react';
import NavBar from './NavBar'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


class ProfileQuestionForm extends Component {

  componentDidMount() {
    this.props.fetchProfileQuestions()
  }


  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Profile Questions</h1>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input onChange={this.updateFormField} id="username" name="username" autoComplete="" autoFocus />

            <InputLabel htmlFor="email">Email</InputLabel>
            <Input onChange={this.updateFormField} id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
        </form>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    profileQuestions: state.profileQuestions
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProfileQuestions: () => {
      dispatch({
        type: 'FETCH_PROFILE_QUESTIONS'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileQuestionForm);
