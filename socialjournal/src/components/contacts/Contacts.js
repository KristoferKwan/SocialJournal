import {Typography, Paper, Grid, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ContactPanel } from '../contactPanel/ContactPanel';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import {ContactDialog} from './ContactDialog'



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
const relationships = [
  'family', 'friend', 'romantic interest', 'co-worker'
];

function Contacts({contacts, setContacts}) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
        {
          contacts.map(contactObject =>{
            return <ContactPanel name = {contactObject.name} lastSeen = {contactObject.lastseen.toDateString()} 
            frequencyOfMeeting= {contactObject.frequencyOfMeeting} relationship = {contactObject.relationship}/>
          })
          }
        <Fab color="primary" aria-label="add" onClick= {handleClickOpen}>
          <AddIcon />
        </Fab>
        <ContactDialog open={open} setOpen= {setOpen} contacts = {contacts} setContacts={setContacts}/>
    </div>
  );
}

export default Contacts;
