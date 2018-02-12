import React, { Component } from 'react';
import Calendar from '../components/Calendar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components';

const Title = styled.h1`
  color: #FFF;
  text-align: center;
`;

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Title>React Calendar</Title>
          <Switch>
            <Route exact path='/' component={Calendar} />
            <Route path='/:month' component={Calendar} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
