import React, { Component } from 'react';
// import NavBar from './NavBar'
// import SignUp from './SignUp'

import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
// import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

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

class LogIn extends Component {
  state = {
    username_or_email: '',
    password: ''
  };

  updateFormField = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const props = this.props;
    const { classes } = props;
    if (props.token)
      return (
        <Redirect
          to={{
            pathname: '/profile'
          }}
        />
      );
    return (
      <React.Fragment>
        <CssBaseline />
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
              Log in
            </Typography>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="username_or_email">
                  Username or Email
                </InputLabel>
                <Input
                  onChange={this.updateFormField}
                  id="username_or_email"
                  name="username_or_email"
                  autoComplete="email"
                  autoFocus
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  this.props.login(this.state);
                }}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}>
                Log in
              </Button>

              <Button
                onClick={() => window.location = '/signup '}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                style={{
                  background: 'linear-gradient(45deg, #00bcd4 30%, #1a237e 90%)'
                }}>
                Not a user? Sign up now!
              </Button>
              {/* #00bcd4 */}
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

LogIn.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    token: state.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user_attributes) => {
      dispatch({
        type: 'AUTHENTICATE_USER',
        payload: user_attributes
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LogIn));

// class LogIn extends Component {

//   render() {
//     return (
//       <div>
//         <h2> LogIn</h2>

//         <input type="text" placeholder="UserName" />
//         <input name="password" type="password" placeholder="Password" />
//         <input type="submit" className="LogInButton" placeholder="Login" />

//         <div>
//           <br />
//           <button className="signUpButton">Sign up now!</button>
//         </div>
//         {/* <SignUp /> */}
//       </div>
//     )
//   }
// }

// // function mapStateToProps(state) {
// //   return {
// //     state: state.testStatels

// //   }
// // }

// // function mapDispatchToProps(dispatch) {
// //   return {
// //     updateProduct: (data) => dispatch({ type: "", payload: data })
// //   }
// // }

// export default LogIn;
