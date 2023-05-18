import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Index from './components/Index/Index';
import MyAccount from './components/MyAccount/MyAccount';
import UserAccount from './components/MyAccount/UserAccount/UserAccount';
import AmpsEffects from './components/Item/Amps-Effects/AmpsEffects';
import BassAmpCabinetIndex from './components/Item/Amps-Effects/Bass/Bass-amp-cabinets/BassAmpCabinetIndex';
import BassAmpHeadIndex from './components/Item/Amps-Effects/Bass/Bass-amp-heads/BassAmpHeadIndex';
import BassComboAmpIndex from './components/Item/Amps-Effects/Bass/Bass-combo-amp/BassComboAmpIndex';
import GuitarAmpCabinetIndex from './components/Item/Amps-Effects/Guitar/Guitar-amp-cabinets/GuitarAmpCabinetIndex';
import GuitarAmpHeadIndex from './components/Item/Amps-Effects/Guitar/Guitar-amp-heads/GuitarAmpHeadIndex';
import GuitarComboAmpIndex from './components/Item/Amps-Effects/Guitar/Guitar-combo-amp/GuitarComboAmpIndex';

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
            <Route component={AmpsEffects} path="/shop/amps-effects" exact />
            <Route component={BassAmpCabinetIndex} path="/shop/amps-effects/bass-amp-cabinets" exact />
            <Route component={BassAmpHeadIndex} path="/shop/amps-effects/bass-amp-heads" exact />
            <Route component={BassComboAmpIndex} path="/shop/amps-effects/bass-combo-amp" exact />
            <Route component={GuitarAmpCabinetIndex} path="/shop/amps-effects/guitar-amp-cabinets" exact />
            <Route component={GuitarAmpHeadIndex} path="/shop/amps-effects/guitar-amp-heads" exact />
            <Route component={GuitarComboAmpIndex} path="/shop/amps-effects/guitar-combo-amp" exact />
          </Switch>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;
