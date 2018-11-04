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
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});


class SignUp extends Component {


  render() {
    const props = this.props
    const { classes } = this.props;

    return (
      <div>
        <h1>Sign Up</h1>

        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input onChange={this.updateFormField} id="username" name="username" autoComplete="" autoFocus />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input onChange={this.updateFormField} id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              onChange={this.updateFormField}
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </FormControl>

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            onClick={e => {
              e.preventDefault()
              this.props.login(this.state)
            }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign up
              </Button>

          <Link style={{ color: 'white', textDecoration: 'none' }} to="/login">
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit} style={{ background: 'linear-gradient(45deg, #00bcd4 30%, #1a237e 90%)', }}>Log in instead</Button>
          </Link>
          {/* #00bcd4 */}
        </form>

      </div>
    )
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
  return {


  }
}

function mapDispatchToProps(dispatch) {
  return {
    signUp: (user_attributes) => {
      dispatch({
        type: "",
        payload: user_attributes
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignUp));
