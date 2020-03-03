import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import './components/headers/Navbar'
import Navbar from './components/headers/Navbar';
import Foot from './components/headers/Foot'
import Ylite from './packs/Ylite';
import Tspecials from './packs/Tspecials';
import SAtours from './packs/SAtours';
import Trip from './components/specials/Trip';

import CountOffer from './components/specials/CountOffer';
import Newsletter from './components/more/Newsletter';


import Home from './pages/Home';
import About from './pages/About';
import Lite from './pages/Lite';
import Lux from './pages/Lux';
import Group from './pages/Group';
import SinglePack from './pages/SinglePack';
import Error from './pages/Error';


class App extends React.Component {
  render() {
    return (
      <>
        <div className="App">
        <Navbar />
       
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/lite" component={Lite} />
            <Route exact path="/lux" component={Lux} />
            <Route exact path="/group" component={Group} />
            <Route exact path="/lite/:single" component={SinglePack} />
            <Route exact path="/lux/:single" component={SinglePack} />
            <Route exact path="/group/:single" component={SinglePack} />
            <Route  component={Error} />
          </Switch>
          <Foot />
        </div>
      </>
    );
  }
}

export default App;
