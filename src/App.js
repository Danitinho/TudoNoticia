import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Principal from './components/pages/Principal';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path = '/' exact component = {Principal} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
