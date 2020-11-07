import {Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
}));


function TimeLine() {
  const classes = useStyles();

  return (
    <div>
    <Typography variant="h4"> 
    Hi Covenant,
    </Typography>

    <Typography variant="body1"> 
    Here are your most recent entries:
    </Typography>
    <Paper className={classes.paper}>
        <Grid container wrap= "nowrap" spacing = {5}>
          <Grid container item direction= 'column' spacing = {3} flexGrow={1} xs = {3} wrap= "nowrap">
            <Grid item>
              <Typography>Djhnsajhadkasj dasdasjkdhak dkhasdkahs </Typography>
            </Grid>
            <Grid item>
              <Typography>Hello</Typography>
            </Grid>
          </Grid>
          <Grid item flexGrow= {2} xs = {9}>
            <Typography>Text</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default TimeLine;
