import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/countrieslist" component={CountriesList} />
        <Route path="/countrieslist/:cca3" component={CountryDetails} />
      </Switch>
    </div>
  );
}

export default App;
