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


function ChatBot() {
  const classes = useStyles();
  
  return (
    <div>
        This is the ChatBot
    </div>
  );
}

export default ChatBot;
