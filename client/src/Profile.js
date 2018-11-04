import React from 'react';
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


const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const sections = [
  'SECTION1',
  'SECTION2',
  'SECTOIN3',
  'SECTOIN4',
  'SECTOIN5',
  'SECTOIN6',
  'SECTOIN7',
  'SECTOIN8',
  'SECTOIN9',


];

const featuredPosts = [
  {
    title: 'IM A TITLE',
    date: 'A DATE?',
    description:
      'ADD DESCRIPTIVE TEXT',
  },
  {
    title: 'IM ALSO A TITLE',
    date: 'ANOTHER DATE?',
    description:
      'ADD DESCRIPTIVE TEXT',
  },
];

const posts = [1, 2, 3];

const archives = [
  'ARCHIVE1',
  'ARCHIVE2',
  'ARCHIVE3',
  'ARCHIVE4',
  'ARCHIVE5',
  'ARCHIVE6',
  'ARCHIVE7',
  'ARCHIVE8',

];

const social = ['LINK?', 'LINK?', 'LINK?'];

function Blog(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>

        <Toolbar className={classes.toolbarMain}>
          <Button size="small">LINK!?</Button>

          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            Profile
          </Typography>

          <IconButton>
            <SearchIcon />
          </IconButton>

          <Button variant="outlined" size="small">
            BUTTON I DO STUFF
          </Button>

        </Toolbar>


        <Toolbar variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Typography color="inherit" noWrap key={section}>
              {section}
            </Typography>
          ))}
        </Toolbar>


        <main>
          {/* BIG SECTION */}
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    BIG LETTERS FOR SOMETHING
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    LINES AND
                    LINES AND
                    LINES AND
                    LINES AND
                    LINES AND
                    LINES OF INFORMATION!

                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main */}



          {/* Sub feature */}
          <Grid container spacing={40} className={classes.cardGrid}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {post.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {post.date}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {post.description}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        TYPOGRAPHY I DO STUFF
                      </Typography>
                    </CardContent>
                  </div>
                  <Hidden xsDown>
                    <CardMedia
                      className={classes.cardMedia}
                      image="GIVE ME AN image" // eslint-disable-line max-len
                      title="Image title"
                    />
                  </Hidden>
                </Card>
              </Grid>
            ))}
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
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  TYPOGRAPHY I DO STUFF
                </Typography>
                <Typography>
                  MORE WORDS AND WORDS AND WORDS AND WORDS AND WORDS AND WORDS
                </Typography>
              </Paper>
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                TYPOGRAPHY I DO STUFF
              </Typography>
              {archives.map(archive => (
                <Typography key={archive}>{archive}</Typography>
              ))}
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                SIDE BAR SECTION
              </Typography>
              {social.map(network => (
                <Typography key={network}>{network}</Typography>
              ))}
            </Grid>
            {/* End sidebar */}


          </Grid>
        </main>
      </div>


      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          FOOTER Something here to give the footer a purpose! FOOTER
        </Typography>
      </footer>
      {/* End footer */}


    </React.Fragment>
  );
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);