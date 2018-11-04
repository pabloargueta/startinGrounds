import React, { Component } from 'react';
import {  BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import ConditionalRoute from './CondtionalRoute'
import GeneralTab from './SignUpTabs/GeneralTab.js'
import ProfileTab from './SignUpTabs/ProfileTab.js'
import Button from '@material-ui/core/Button';


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

class SignUp extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar
              className={classes.avatar}
              style={{
                background: 'linear-gradient(45deg, #1a237e 30%, #00bcd4 90%)'
              }}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <BrowserRouter>
              <Switch>
              <Route path={`${this.props.match.path}/1`} component={GeneralTab}/>
              <ConditionalRoute path={`${this.props.match.path}/2`} condition={this.props.signUpStep >= 2} component={ProfileTab}/>
              <Route path='/' render={() => (
                <Redirect to={{
                  pathname:`${this.props.match.path}/1`
                }}/>
              )} />
              </Switch>
            </BrowserRouter>
            <Link
                style={{ color: 'white', textDecoration: 'none' }}
                to="/login">
                <Button
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
              </Link>
          </Paper>
        </main>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    signUpStep: state.signUpStep
  };
}

function mapDispatchToProps(dispatch) {
  return {
    
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SignUp));
