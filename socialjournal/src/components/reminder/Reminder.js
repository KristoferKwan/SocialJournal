import {Typography, Paper, Grid, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ContactPanel } from '../contactPanel/ContactPanel';
import AddIcon from '@material-ui/icons/Add';
import { Alert, AlertTitle } from '@material-ui/lab';
import React from 'react';
import {ContactDialog} from '../contacts/ContactDialog'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  contact: {
    marginTop: '50px',
    marginBottom: '50px'
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
  const [upcomingContacts, setUpcoming] = React.useState([]);
  const [missedContacts, setMissed] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const getCalculatedUrgencyValue = ((contactObject) => {
    const frequency =  contactObject.frequencyOfMeeting;
    const lastseen = new Date(contactObject.lastseen.valueOf());
    const today = new Date()
    let upcomingDate = new Date(contactObject.lastseen.valueOf());
    upcomingDate.setDate(lastseen.getDate() + frequencyToTime[frequency])
    const diffDays = Math.ceil((upcomingDate - today) / (1000 * 60 * 60 * 24));
    return diffDays / frequencyToTime[frequency];
  })

  const sortMissedAndUpcoming = (contacts) => {
    console.log(contacts);
    setMissed([]);
    setUpcoming([]);
    const tempMissed = [];
    const tempUpcoming = []; 
    contacts.forEach(async (contact) => {
      if(getCalculatedUrgencyValue(contact) < 0){
        tempMissed.push(contact)
      } else {
        tempUpcoming.push(contact)
      }
    })
    setMissed([...tempMissed])
    setUpcoming([...tempUpcoming])
    console.log(tempMissed)
    console.log(tempUpcoming)
  }

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
    const calculateUrgency = getCalculatedUrgencyValue(contactObject);
    console.log(contactObject.name, calculateUrgency)
    if( calculateUrgency <= .2){
      return "alert"
    } else if (calculateUrgency <= .5) {
      return "warning"
    } else{
      return null
    }
  }

  const createUpcomingAlerts = () => {
      upcomingContacts.forEach(contact => {
        const frequency =  contact.frequencyOfMeeting;
        const alert = requiresAlert(contact);
        let upcomingDate = new Date(contact.lastseen.valueOf());
        upcomingDate.setDate(upcomingDate.getDate() + frequencyToTime[frequency])
        switch (alert){
          case 'warning':
            NotificationManager.info('You have a meeting with ' + contact.name + ' on ' + upcomingDate.toDateString(), 'Upcoming Meeting', 10000)
          case 'alert':
            NotificationManager.warning('You have a meeting with ' + contact.name + ' SOON on ' + upcomingDate.toDateString(), 'Upcoming Meeting', 10000)
          default:
            return null
        } 
      }) 
      if(missedContacts.length > 0){
        NotificationManager.info('You have ' + missedContacts.length + ' contacts missed', 'Reminder', 10000)
      }
  }

  React.useEffect(() => {
    sortMissedAndUpcoming(contacts)
    sortContacts(contacts)
  }, [contacts])

  React.useEffect(() => {
    createUpcomingAlerts()
    
  }, [missedContacts])

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
    <NotificationContainer/>
    </Typography>
    <div class={classes.contact}>
        {
          upcomingContacts.map(contactObject =>{
            return( 
              <div className={classes.contact}>
                <ContactPanel name = {contactObject.name} lastSeen = {contactObject.lastseen.toDateString()} 
                frequencyOfMeeting= {contactObject.frequencyOfMeeting} relationship = {contactObject.relationship}/>
            </div>)
          })
          }
    </div>
    <Typography variant="h4"> 
    Missed
  </Typography>

  <Typography variant="body1"> 
    Here are interactions that you have left for the week!
    <NotificationContainer/>
    </Typography>
    <div class={classes.contact}>
        {
          missedContacts.map(contactObject =>{
            return( 
              <div className={classes.contact}>
                <ContactPanel name = {contactObject.name} lastSeen = {contactObject.lastseen.toDateString()} 
                frequencyOfMeeting= {contactObject.frequencyOfMeeting} relationship = {contactObject.relationship}/>
            </div>)
          })
          }
      </div>
        <Fab color="primary" aria-label="add" onClick= {handleClickOpen}>
          <AddIcon />
        </Fab>
        <ContactDialog open={open} setOpen= {setOpen} contacts = {contacts} setContacts={setContacts}/>
    </div>
  );
}

export default Contacts;
