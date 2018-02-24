import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../styles/App.css';
import '../styles/bootstrap-utilities.css';
import '../styles/bootstrap-grid.css';

import BaseLayout from './BaseLayout';
import Home from './Home';
import UserData from './UserData';


class App extends Component {

  render() {
    return (
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path="/:name" component={UserData} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BaseLayout>
      </Router>
    );
  }

}


export default App;
