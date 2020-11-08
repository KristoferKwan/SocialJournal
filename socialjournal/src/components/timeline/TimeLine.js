import {Typography, Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import {EntryComponent} from '../../EntryComponent';
import {SideMenu} from '../drawer/Drawer'

function TimeLine() {
  return (
    <div>
      <SideMenu/>
      <Typography variant="h4"> 
        Hi Covenant,
      </Typography>

      <Typography variant="body1"> 
        Here are your most recent entries:
        </Typography>

      <EntryComponent name = "Covenant Faluyi" date = {new Date().toDateString()} message=" Navy seal copy pasta"/>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}

export default TimeLine;
