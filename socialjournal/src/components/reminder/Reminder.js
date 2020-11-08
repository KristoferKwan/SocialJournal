import {Typography, Paper, Grid, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ContactPanel } from '../contactPanel/ContactPanel';
import AddIcon from '@material-ui/icons/Add';
import { Alert, AlertTitle } from '@material-ui/lab';
import React from 'react';
import {ContactDialog} from '../contacts/ContactDialog'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  contact: {
    marginTop: '50px'
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
const relationships = [
  'family', 'friend', 'romantic interest', 'co-worker'
];

function Contacts({contacts, setContacts}) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const sortContacts = (contacts) => {
    contacts.sort(function(a, b) {
      var textA = a.lastseen;
      var textB = b.lastseen;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
  }

  const frequencyToTime = {
    "weekly": 7,
    "daily": 1,
    "monthly": 31
  }

  const requiresAlert = (contactObject) => {
    const frequency =  contactObject.frequencyOfMeeting;
    const lastseen = new Date(contactObject.lastseen.valueOf());
    const today = new Date()
    let upcomingDate = new Date(contactObject.lastseen.valueOf());
    upcomingDate.setDate(lastseen.getDate() + frequencyToTime[frequency])
    const diffDays = Math.ceil((upcomingDate - today) / (1000 * 60 * 60 * 24)); 
    const calculateUrgency = diffDays / frequencyToTime[frequency]
    console.log(calculateUrgency);
    if( calculateUrgency >= .8){
      return "alert"
    } else if (calculateUrgency >= .5) {
      return "warning"
    } else{
      return null
    }
  }

  React.useEffect(() => {
    sortContacts(contacts)
  }, [contacts])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
  <Typography variant="h4"> 
    Upcoming
  </Typography>

  <Typography variant="body1"> 
    Here are interactions that you have left for the week!
    {contacts.map(contactObject => {
      const alert = requiresAlert(contactObject); 
      if(alert === 'red'){
        return(
          <Alert severity="error">
            <AlertTitle>Immediate/Missed Meeting</AlertTitle>
            You have a meeting with {contactObject.name} soon! 
          </Alert>
        )
      } else if (alert === 'yellow'){
        return (<Alert severity="warning">
        <AlertTitle>Upcoming meeting</AlertTitle>
        You have a meeting with {contactObject.name}
      </Alert>)
      } else {
        return <> </>
      }
    })}

    </Typography>
    <div class={classes.contact}>
        {
          contacts.map(contactObject =>{
            return( 
              <div className={classes.contact}>
                <ContactPanel name = {contactObject.name} lastSeen = {contactObject.lastseen.toDateString()} 
                frequencyOfMeeting= {contactObject.frequencyOfMeeting} relationship = {contactObject.relationship}/>
            </div>)
          })
          }
        <Fab color="primary" aria-label="add" onClick= {handleClickOpen}>
          <AddIcon />
        </Fab>
        <ContactDialog open={open} setOpen= {setOpen} contacts = {contacts} setContacts={setContacts}/>
    </div>
    </div>
  );
}

export default Contacts;
