import React, { useState, useEffect } from 'react';
import Timeline from './components/timeline/TimeLine';
import Questions from './components/questions/Question';
import Reminder from './components/reminder/Reminder'
import Button from '@material-ui/core/Button';
import Contacts from './components/contacts/Contacts'
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
    const [entries, setEntries] = useState([]);
    const [contacts, setContacts] = useState([{
        name: "John",
        relationship: "Friend",
        lastseen: new Date("2019-01-01T18:54"),
        frequencyOfMeeting: "weekly",
        emailAddress: "johnJ@email.com",
        phoneNumber: "xxx-xxx-xxxxx"
    }]);
    const [reminders, setReminders] = useState([]);
    
    // const addEntry = (entry) => {
    //     setEntries([...entries,entry]);
    // }

    useEffect(() => {
      console.log("heeere")
      sortContacts(contacts)
    }, [contacts])

    const sortContacts = (contacts) => {
      contacts.sort(function(a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    }
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={() => <Timeline entries={entries}/>} />
            <Route path="/questions" exact component={() => <Questions entries={entries} setEntries={setEntries} contacts={contacts}/>} />
            <Route path="/reminders" exact component={Reminder} />
            <Route path="/contacts" exact component={() => <Contacts contacts = {contacts} setContacts = {setContacts}/>} />
          </Switch>
        </div>
      </Router>
      </MuiPickersUtilsProvider>
  );
}

export default App;
