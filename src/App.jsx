import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Index from './components/Index/Index';
import MyAccount from './components/MyAccount/MyAccount';
import UserAccount from './components/MyAccount/UserAccount/UserAccount';
import Info from './components/MyAccount/UserAccount/Account-Info/Info';

const App = () => {

  return (
    <React.StrictMode>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route component={Index} path="/" exact />
            <Route component={MyAccount} path="/create-account" exact />
            <Route component={UserAccount} path="/my-account/account-info" exact />
          </Switch>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;
