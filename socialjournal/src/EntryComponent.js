import TextTruncate from 'react-text-truncate';
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Grid, Typography} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height: '100%'
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

  
export const EntryComponent  = ({name, date, message}) => {
    const classes = useStyles();
    return (
    <Paper className={classes.paper}>
        <Grid container wrap= "nowrap" spacing = {5}>
          <Grid container item direction= 'column' spacing = {3} flexGrow={1} xs = {3} wrap= "nowrap">
            <Grid item zeroMinWidth style={{ wordWrap: "break-word" }}>
              <Typography> {name} </Typography>
            </Grid>
            <Grid item>
              <Typography>{date}</Typography>
            </Grid>
          </Grid>
          <Grid item flexGrow= {2} xs = {9}>
            <b>What was your favorite part of your conversation?</b>
            <br></br>
            <TextTruncate
              line={3}
              element="span"
              truncateText="…"
              text= {message} 
            />
          </Grid>
        </Grid>
      </Paper>)

}