import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Principal from './components/pages/Principal';
import Esportes from './components/pages/Esportes';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path = '/' exact component = {Principal} />
          <Route path = '/esportes' component = {Esportes}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
