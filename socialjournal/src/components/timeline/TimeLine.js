import {Typography} from '@material-ui/core';
import {EntryComponent} from './EntryComponent';

function TimeLine() {
  return (
    <div>
    <Typography variant="h4"> 
      Hi Covenant,
    </Typography>

    <Typography variant="body1"> 
      Here are your most recent entries:
    </Typography>

    <EntryComponent name = "Covenant Faluyi" date = {new Date().toDateString()} message=" Navy seal copy pasta"/>

    </div>
  );
}

export default TimeLine;
