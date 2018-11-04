import React, { Component } from 'react';
import { connect } from 'react-redux';
// import UpdateAvatarForm from './UpdateAvatarForm';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  NavLink,
  Link
} from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Modal from '@material-ui/core/Modal';

import Logo from './logo.png';

const styles = (theme) => ({
  root: {
    // flexGrow: 1,
    display: 'flex'
  },
  grow: {
    flexGrow: 1

    // background: '#1a237e'
    // textAlign: 'center',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  paper: {
    marginRight: theme.spacing.unit * 2
  }
});

class Navbar extends Component {
  state = {
    profileOpen: false,
    notificationsOpen: false,
messagesOpen: false
  };

  handleToggle = (e) => {
    this.setState((state) => ({ open: !this.state.open }));
  };

  handleClose = (event) => {
    // if (this.anchorEl.contains(event.target)) {
    //   return;
    // }

    this.setState({ open: false });
  };

  handleLogout = () => {
    this.props.logout();
  };
  // from user messages "length + 1 "
  messageAlert = () => {
    3;
  };

  // from user notifications "length + 1 "
  notificationAlert = () => {
    return 3;
  };

  render() {
    const { classes } = this.props;

    const { open } = this.state;

    return (
      <AppBar position="static">
        <Toolbar
          style={{
            background: 'linear-gradient(45deg, #1a237e 30%, #00bcd4 90%)'
          }}>
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <Typography className={classes.grow}>
            <Link to="/">
              <img className={classes.headerImage} src={Logo} />
            </Link>
          </Typography>
          {/* {localStorage.token ? <Button color="inherit" onClick={this.handleLogout}>Logout</Button> : <div></div>} */}
          {this.props.token ? (
            <div>
              <IconButton color="inherit">
                <Badge badgeContent={this.messageAlert} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>

              <IconButton color="inherit">
                <Badge
                  badgeContent={this.notificationAlert}
                  color="secondary"
                  aria-owns={this.state.open ? 'message-list-grow' : undefined}
                  aria-haspopup="true"
                  onClick={(e) => this.handleToggle(e)}>
                  <NotificationsIcon />
                </Badge>
              </IconButton>

              <IconButton // aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true" // onClick={this.handleProfileMenuOpen}
                color="inherit"
                buttonRef={(node) => {
                  this.anchorEl = node;
                }}
                aria-owns={this.state.open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={(e) => this.handleToggle(e)}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg"
                  className={classes.avatar}
                  onClick={this.handleToggle}
                />
                {/* <AccountCircle /> */}
              </IconButton>
            </div>
          ) : (
            ''
          )}

          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom',
                  background: 'solid'
                }}>
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                      <MenuItem onClick={this.handleClose}>My account</MenuItem>

                      <MenuItem
                        onClick={() => {
                          this.handleClose();
                          this.props.logout();
                        }}>
                        Logout
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>

          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="message-list-grow"
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom',
                  background: 'solid'
                }}>
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Toolbar>
      </AppBar>
    );
  }
}
Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch({ type: 'LOGOUT_USER' });
    }
  };
}

function mapStateToProps(state) {
  return {
    token: state.token
  };
}

// const SimpleModalWrapped = withStyles(styles)(Navbar);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Navbar));
