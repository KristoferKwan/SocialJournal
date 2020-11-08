import {Typography, Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import {EntryComponent} from '../../EntryComponent';
import { useHistory } from 'react-router-dom';
import {SideMenu} from '../drawer/Drawer'
import { datePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import '../../style/Timeline.css'

const useStyles = makeStyles((theme) => ({
  entry: {
    marginTop: '50px',
  }
}));


function TimeLine(props) {
  const classes = useStyles();
  let history = useHistory();
  const redirect = () => {
    history.push('/questions')
  }

  return (
    <div>
      <Typography variant="h4"> 
        Hi Covenant,
      </Typography>

      <Typography variant="body1"> 
        Here are your most recent entries:
        </Typography>
        <div className={classes.entry}>
        <EntryComponent name = "Covenant Faluyi" date = {new Date().toDateString()} message=" Navy seal copy pasta"/>
        </div>
        {props.entries.map((object, index) => (
           <div className={classes.entry}>
           <EntryComponent name = {object.questionAnswers[0].answer} date = {object.entryDate.toDateString()} message={object.questionAnswers[1].answer}/>
            </div>
        ))}
      
      <Fab color="primary" aria-label="add">
        <AddIcon onClick={() => redirect()}/>
      </Fab>
    </div>
  );
}

export default TimeLine;
