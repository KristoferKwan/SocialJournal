import React from 'react';
import Timeline from './components/timeline/TimeLine';
import Questions from './components/questions/Question';
import Reminder from './components/reminder/Reminder'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Timeline} />
            <Route path="/questions" exact component={Questions} />
            <Route path="/reminders" exact component={Reminder} />
          </Switch>
        </div>
      </Router>

  );
}

export default App;
