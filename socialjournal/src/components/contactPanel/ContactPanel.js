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
      maxWidth: 1000,
      maxHeight: 200
    },
    image: {
      width: 128,
      height: 128,
    },
    text:{
      textAlign: 'right'
    }
  }));

  
export const ContactPanel  = ({name, lastSeen, relationship, frequencyOfMeeting, setPopUpOpen, index, setCurrentIndex}) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper} onClick= {() => {console.log(index); setCurrentIndex(index); setPopUpOpen(true)}}>
        <Grid container wrap= "nowrap" spacing = {2}>
          <Grid container item direction= 'column' spacing = {3} flexGrow={1} xs = {4} wrap= "nowrap">
            <Grid item zeroMinWidth style={{ wordWrap: "break-word" }}>
              <Typography> {name} </Typography>
            </Grid>
            <Grid item>
              <Typography>{lastSeen}</Typography>
            </Grid>
          </Grid>
          <Grid item flexGrow= {2} xs = {8} alignItems={"flex-end"} justify={"flex-end"}>
            <TextTruncate className={classes.text}
              line={3}
              element="span"
              truncateText="…"
              text= {relationship} 
            />
          </Grid>
        </Grid>
      </Paper>)

}