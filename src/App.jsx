import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Index from './components/Index/Index';
const App = () => {

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route component={Index} path="/" exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
