import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import React from 'react';
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import {Select, MenuItem} from "@material-ui/core"



export const ContactInfo = ({popUpOpen, setPopUpOpen, contacts, currentIndex}) => {
    console.log(contacts);
    console.log(currentIndex);
    const handleCancel = () => {
        setPopUpOpen(false);
      };

       
      //const [name, setName] = React.useState('');
      //const [relationship, setRelationship] = React.useState('')
      //const [email, setEmail] = React.useState('')
      //const [phone, setPhone] = React.useState('')
      //const [lastSeen, setLastSeen] = React.useState(new Date())
      //const [frequencyOfMeeting, setFrequency] = React.useState('daily')

      const name = contacts[currentIndex].name;
      const relationship = contacts[currentIndex].relationship;
      const lastseen = contacts[currentIndex].lastseen;
      const frequencyOfMeeting = contacts[currentIndex].frequencyOfMeeting;
      const emailAddress = contacts[currentIndex].emailAddress;
      const phoneNumber = contacts[currentIndex].phoneNumber;






      const handleOk = () => {
        setPopUpOpen(false);
      }

      const relationships = [
        'family', 'friend', 'romantic interest', 'co-worker'
      ];
      
    return(
        <Dialog open={popUpOpen} onClose={handleCancel} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Name:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value = {name}
            label="name"
            type="name"
            InputProps={{
            readOnly: true,
          }}
          />
          <DialogContentText>
            Relationship:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value = {relationship}
            label="Relationship"
            type="name"
            InputProps={{
            readOnly: true,
          }}
          />
    <DialogContentText>
            Date of last interaction:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value = {lastseen.toDateString()}
            label="last-seen"
            type="name"
            InputProps={{
            readOnly: true,
          }}
          />

<DialogContentText>
            Desired frequency interaction
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            value = {frequencyOfMeeting}
            label="frequency of interaction"
            type="name"
            InputProps={{
            readOnly: true,
          }}
          />

<DialogContentText>
            Email address:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value = {emailAddress}
            label="email"
            type="name"
            InputProps={{
            readOnly: true,
          }}
          />

          <DialogContentText>
            Phone number:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value = {phoneNumber}
            label="Phone Number"
            type="name"
            InputProps={{
            readOnly: true,
          }}
          />
        </DialogContent>

        
        <DialogActions>
          <Button onClick={handleOk} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    )
}