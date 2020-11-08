import React, { useState, useEffect } from 'react';
import Timeline from './components/timeline/TimeLine';
import Questions from './components/questions/Question';
import Reminder from './components/reminder/Reminder'
import Button from '@material-ui/core/Button';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
    const [entries, setEntries] = useState([]);
    const [contacts, setContacts] = useState([{
        name: "John",
        relationship: "Friend",
        lastseen: "",
        frequencyOfMeeting: "weekly"
    }]);
    const [reminders, setReminders] = useState([]);

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={() => <Timeline entries={entries}/>} />
            <Route path="/questions" exact component={() => <Questions entries={entries} setEntries={setEntries} contacts={contacts}/>} />
            <Route path="/reminders" exact component={Reminder} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
