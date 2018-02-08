import React, { Component } from 'react';
import Calendar from '../components/Calendar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Calendar} />
          <Route path='/:month' component={Calendar} />
        </Switch>
      </Router>
    );
  }
}

export default App;
