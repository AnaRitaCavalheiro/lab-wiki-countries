import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesJSON from './countries.json';

class App extends React.Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    this.setState({
      countries: countriesJSON,
    });
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <div style={{ float: 'left', height: '900px', overflow: 'scroll' }}>
          <CountriesList countries={this.state.countries} />
        </div>
        <div style={{ float: 'right', marginRight: '500px' }}>
          <Switch>
            <Route exact path="/countrieslist" component={CountriesList} />
            <Route path="/countrieslist/:cca3" component={CountryDetails} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
