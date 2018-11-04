import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'


import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
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
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});


class Billing extends Component {

  handleCCinfo = () =>{
    console.log("handleCCinfo")
  }

  render() {
    return (
      <div>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
                Billing Information
          </Typography>

            <form className={classes.form}>

              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="username_or_email">Full Name</InputLabel>
                  <Input
                    onChange={this.handleCCinfo}
                    name="name"
                    type="text"
                    id="name"
                    autoComplete="name"
                  />
                  </FormControl>

                  <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="username_or_email">CC#</InputLabel>
                  <Input
                    onChange={this.handleCCinfo}
                    name="CC#"
                    value="number"
                    id="CC#"
                    autoComplete="cc-number"
                  />
                  </FormControl>

                  <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="username_or_email">Expration month</InputLabel>
                  <Input
                    onChange={this.handleCCinfo}
                    name="exp-mo"
                    value="number"
                    id="exp-mo"
                    autoComplete="cc-exp-month"
                  />
                  </FormControl>

                  <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="username_or_email">Experation Year</InputLabel>
                  <Input
                    onChange={this.handleCCinfo}
                    name="exp-yr"
                    value="number"
                    id="exp-yr"
                    autoComplete="cc-exp-year"
                  />
                  </FormControl>

                  <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">CVV</InputLabel>
                  <Input
                    onChange={this.handleCCinfo}
                    name="CVV"
                    value="number"
                    id="CVV"
                    autoComplete="cc-csc"
                  />
                  </FormControl>
                  <Button
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("submit hit")
                  }}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}>
                  Submit 
                </Button>
              </form>
            </Paper>
        </main>

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


export default connect(mapStateToProps, mapDispatchToProps)(Billing);
