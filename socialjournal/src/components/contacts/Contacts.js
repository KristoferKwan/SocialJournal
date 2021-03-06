import {Typography, Paper, Grid, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ContactPanel } from '../contactPanel/ContactPanel';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import {ContactDialog} from './ContactDialog'
import {ContactInfo} from './ContactInfo'



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

  const [popUpOpen, setPopUpOpen] = React.useState(false);

  const [currentIndex, setCurrentIndex] = React.useState(0);
  console.log(currentIndex)


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
  <Typography variant="h4"> 
    Contacts Page
  </Typography>

  <Typography variant="body1"> 
    Click the add button to add more interactions!
    </Typography>
    <div class={classes.contact}>
        {
          contacts.map((contactObject, index) =>{
            return( 
              <div className={classes.contact}>
                <ContactPanel name = {contactObject.name} lastSeen = {contactObject.lastseen.toDateString()} 
                frequencyOfMeeting= {contactObject.frequencyOfMeeting} relationship = {contactObject.relationship} setPopUpOpen = {setPopUpOpen} index = {index}  setCurrentIndex = {setCurrentIndex} key={index}/>
            </div>)
          })
          }
        <Fab color="primary" aria-label="add" onClick= {handleClickOpen}>
          <AddIcon />
        </Fab>
        <ContactDialog open={open} setOpen= {setOpen} contacts = {contacts} setContacts={setContacts}/>
        <ContactInfo setPopUpOpen = {setPopUpOpen} popUpOpen = {popUpOpen} contacts = {contacts} currentIndex = {currentIndex}/>

    </div>
    </div>
  );
}

export default Contacts;
