import React, { Component } from 'react';

import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import TabNavigation from './TabNavigation.js';
import { withRouter, Link, Redirect } from 'react-router-dom';




const styles = (theme) => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class GeneralTab extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  };

  updateFormField = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };



  render() {
    const props = this.props;
    const { classes } = this.props;
    console.log(props);
    return (
      <React.Fragment>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              onChange={this.updateFormField}
              id="username"
              name="username"
              autoComplete=""
              autoFocus
            />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              onChange={this.updateFormField}
              id="email"
              name="email"
              autoComplete=""
            />
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

          {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                /> */}

          <Button
            onClick={(e) => {
              e.preventDefault();

              this.props.signUp(this.state, this.props.history);
            }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Sign up
          </Button>


          <Button
            onClick={() => window.location = '/login '}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{
              background:
                'linear-gradient(45deg, #00bcd4 30%, #1a237e 90%)'
            }}>
            Log in instead
          </Button>


          {/* #00bcd4 */}
        </form>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    signUp: (user_attributes, history) => {
      history.push('/signup/2');
      dispatch({
        type: 'CREATE_USER',
        payload: user_attributes
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(GeneralTab));
