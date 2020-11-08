import React, { useState, useEffect } from 'react';
import Timeline from './components/timeline/TimeLine';
import Questions from './components/questions/Question';
import Reminder from './components/reminder/Reminder';
import {SideMenu} from './components/drawer/Drawer';
import './style/Content.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Container from '@material-ui/core/Container';


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
        <SideMenu/>
        <Container fixed>
        <div className="App content">
          <Switch>
            <Route path="/" exact component={() => <Timeline entries={entries}/>} />
            <Route path="/questions" exact component={() => <Questions entries={entries} setEntries={setEntries} contacts={contacts}/>} />
            <Route path="/reminders" exact component={Reminder} />
          </Switch>
        </div>
        </Container>
      </Router>
  );
}

export default App;
