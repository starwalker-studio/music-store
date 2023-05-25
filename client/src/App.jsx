import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Index from './components/Index/Index';
import MyAccount from './components/MyAccount/MyAccount';
import UserAccount from './components/MyAccount/UserAccount/UserAccount';
import AmpsEffects from './components/Item/Amps-Effects/AmpsEffects';
import AmpIndex from './components/Item/Amps-Effects/Amps/AmpIndex';

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
            <Route path="/shop/amps-effects/bass-amp-cabinets" children={<AmpIndex type="BASS_AMP_CABINET"/>} exact />
            <Route path="/shop/amps-effects/bass-amp-heads" children={<AmpIndex type="BASS_AMP_HEAD"/>} exact />
            <Route path="/shop/amps-effects/bass-combo-amp" children={<AmpIndex type="BASS_COMBO_AMP"/>} exact />
            <Route path="/shop/amps-effects/guitar-amp-cabinets" children={<AmpIndex type="GUITAR_AMP_CABINET"/>} exact />
            <Route path="/shop/amps-effects/guitar-amp-heads" children={<AmpIndex type="GUITAR_AMP_HEAD"/>} exact />
            <Route path="/shop/amps-effects/guitar-combo-amp" children={<AmpIndex type="GUITAR_COMBO_AMP"/>} exact />  
          </Switch>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;
