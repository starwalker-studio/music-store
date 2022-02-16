import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Index from './components/Index/Index';
import Register from './components/Register/Register';

const App = () => {

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route component={Index} path="/" exact />
          <Route component={Register} path="/create_account" exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
