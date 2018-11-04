import React, { Component } from 'react';
import NavBar from './NavBar';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

class PreferenceForm extends Component {
  componentDidMount() {
    this.props.fetchPreferences();
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Preferences</h1>
        <form>
          {this.props.preferences.map((preference) =>
            this.renderPreference(preference)
          )}
        </form>
      </div>
    );
  }

  renderPreference(preference) {
    let profileQuestion = preference.profile_question;
    switch (profileQuestion.question_type) {
      case 'categorical':
      case 'ordinal':
        return (
          <FormControl component="fieldset" margin="normal" required fullWidth>
            <FormLabel component="legend">{profileQuestion.preference_wording}</FormLabel>
            <RadioGroup value={preference.answer_option_id} onChange={e => this.props.updatePreference({ ...preference, answer_option_id: parseInt(e.target.value) })}>
              {profileQuestion.answer_options.map((option) => (
                <FormControlLabel
                  value={option.value}
                  control={<Radio />}
                  label={option.wording}
                />
              ))}
            </RadioGroup>
          </FormControl>
        );
        break;
      default:
        break;
    }
  }
}

function mapStateToProps(state) {
  return {
    preferences: state.preferences
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPreferences: () => {
      dispatch({
        type: 'FETCH_PREFERENCES'
      });
    },

    updatePreference: (item) => {
      dispatch({
        type: 'UPDATE_PREFERENCE',
        payload: item
      })
    }
  };
}

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

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PreferenceForm)
);
