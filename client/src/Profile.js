import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';
import { renderers } from 'react-markdown';

import Avatar from './Avatar'

import './Profile.css'

const styles = (theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: 'space-between'
  },
  mainFeaturedPost: {
    // backgroundColor: theme.palette.blue_grey[500],
    backgroundColor: '#607d8c',
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3
  },
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`
  }
});


function mapStateToProps(state) {
  return {
    profileAnswers: state.profileAnswers,
    currentUser: state.currentUser,
    matches: state.currentUser.matches

  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchProfileAnswers: () => {
      dispatch({
        type: 'FETCH_PROFILE_ANSWERS'
      });
    }
  };
}

class Blog extends Component {
  componentDidMount() {
    this.props.fetchProfileAnswers();
  }

  renderMatchCard = (match) => {
    console.log(this.props.currentUser)
    return (
      <Grid item key={"id"} xs={12} md={6}>
        <Card className={"id"}>
          <div className={"classes.cardDetails"}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {match.username}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">

              </Typography>
              <Typography variant="subtitle1" paragraph>

              </Typography>
              <Typography variant="subtitle1" color="primary">
                Im a Match!
                          </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={"classes.cardMedia"}
              image="GIVE ME AN image" // eslint-disable-line max-len
              title="Image title"
            />
          </Hidden>
        </Card>
      </Grid>
    )
  }



  render() {
    console.log(this.props.profileAnswers)

    const { classes } = this.props;


    let backgroundImage = "https://backgroundcheckall.com/wp-content/uploads/2017/12/generic-background-5.jpg"
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          {/* <Toolbar className={classes.toolbarMain}> */}
          {/* <Button size="small">LINK!?</Button> */}
          {/* <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              className={classes.toolbarTitle}>
              Profile
            </Typography> */}
          {/* <IconButton>
              <SearchIcon />
            </IconButton>
            <Button variant="outlined" size="small">
              BUTTON I DO STUFF
            </Button>
          </Toolbar> */}
          {/* <Toolbar variant="dense" className={classes.toolbarSecondary}> */}
          {/* {sections.map((section) => (
              <Typography color="inherit" noWrap key={section}>
                {section}
              </Typography>
            ))} */}
          {/* </Toolbar> */}
          <main>

            <div style={{
              width: '100%',
              height: '300px',
              backgroundImage: `url(${backgroundImage})`
            }}>
            </div>
            <div className="container icons">
              <div className="big-icon">
                <Avatar />
              </div>
              <div className="rate">

              </div>
              <div className="add">

              </div>
            </div>


            {/* BIG SECTION */}
            <Paper className={classes.mainFeaturedPost}>
              <Grid container>
                <Grid item md={6}>
                  <div className={classes.mainFeaturedPostContent}>
                    <Typography
                      component="h1"
                      variant="h3"
                      color="inherit"
                      gutterBottom>
                      {this.props.currentUser.username}
                    </Typography>
                    <Typography variant="h5" color="inherit" paragraph>
                      Edit profile to add a summary
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Paper>
            {/* End main */}

            {/* Sub feature */}
            <Grid container spacing={40} className={classes.cardGrid}>


              {this.props.currentUser.matches.map(match => this.renderMatchCard(match))}

            </Grid>
            {/* End sub feature */}

            <Grid container spacing={40} className={classes.mainGrid}>
              {/* Main content */}

              <Grid item xs={12} md={8}>
                <Typography variant="h6" gutterBottom>
                  TYPOGRAPHY IM SMALL TEXT
                </Typography>
                <Divider />
              </Grid>
              {/* End main*/}

              {/* Sidebar */}
              <Grid item xs={12} md={4}>
                <Typography
                  variant="h6"
                  gutterBottom
                  className={classes.sidebarSection}>
                  My summary 1
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  className={classes.sidebarSection}>
                  My summary 2
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  className={classes.sidebarSection}>
                  My summary 3
                </Typography>
                <Paper elevation={0} className={classes.sidebarAboutBox}>
                  <Typography variant="h6" gutterBottom>
                    My Preferences
                  </Typography>
                  <Typography>Bring in Preferences info</Typography>
                </Paper>
              </Grid>
              {/* End sidebar */}


            </Grid>
          </main>
        </div>
        {/* Footer */}

        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Site Moto
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p">
            FOOTER StartinGround! FOOTER
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

// Blog.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Blog)
);