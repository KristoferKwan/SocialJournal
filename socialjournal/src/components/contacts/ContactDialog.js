import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import React from 'react';


export const ContactDialog = ({open, setOpen, setContacts, contacts}) => {
    const handleCancel = () => {
        setOpen(false);
      };

      
       
      const [name, setName] = React.useState('');
      const [relationship, setRelationship] = React.useState('')
      const [email, setEmail] = React.useState('')
      const [phone, setPhone] = React.useState('')

      const handleSubmit = () => {
        const newContact = {
            name: name,
            relationship: relationship,
            lastseen: "N/A",
            frequencyOfMeeting: "N/A",
            emailAddress: email,
            phoneNumber: phone
        }
        const newContactList = [...contacts, newContact]
        newContactList.sort(function(a, b) {
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        setContacts(newContactList)
        setOpen(false);
      }

      const relationships = [
        'family', 'friend', 'romantic interest', 'co-worker'
      ];
      
      const filter = createFilterOptions();

    return(
        <Dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter name of new contact:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="name"
            type="name"
            onChange={(event) => {
        
        setName(
         event.target.value
        );
    }}
          />
          <DialogContentText>
            Enter your relationship with the person:
          </DialogContentText>
          <Autocomplete
      
      
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            title: `Add "${params.inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={relationships}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
      renderOption={(option) => option.title}
      style={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Relationshio..." variant="outlined" />
      )}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setRelationship(newValue
          );
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setRelationship(newValue.inputValue,
          );
        } else {
            setRelationship(newValue,
          );
        }
      }}
      value={relationship}

    />

<DialogContentText>
            Email address of contact:
          </DialogContentText>
          <TextField
            autoFocus
            id="name"
            label="email"
            type="name"
            onChange={(event, newValue) => {
        
        setEmail(
         newValue
        );
    }}
            
          />

          <DialogContentText>
            Phone number of contact:
          </DialogContentText>
          <TextField
            autoFocus
            id="name"
            label="Phone #"
            type="name"
            OnChange={(event, newValue) => {
        
        setPhone(
         newValue
        );
    }}
            
          />
        </DialogContent>

        
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    )
}