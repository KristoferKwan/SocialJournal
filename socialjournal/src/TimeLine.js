import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {EntryComponent} from './EntryComponent';

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

    <EntryComponent/>

    </div>
  );
}

export default TimeLine;
