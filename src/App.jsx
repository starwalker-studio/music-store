import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Index from './components/Index/Index';
import MyAccount from './components/MyAccount/MyAccount';

const App = () => {

  return (
    <React.StrictMode>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route component={Index} path="/" exact />
            <Route component={MyAccount} path="/create_account" exact />
          </Switch>
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;
