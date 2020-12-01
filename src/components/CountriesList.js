import React from 'react';
import { Link } from 'react-router-dom';
import countriesList from '../countries.json';

class CountriesList extends React.Component {
  state = {
    countries: countriesList,
  };

  render() {
    return (
      <div>
        <h2>Countries</h2>
        {this.state.countries.map((country, index) => {
          return (
            <div key={index}>
              <Link to={`/countrieslist/${country.cca3}`}>
                <h3>{country.name.official}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CountriesList;
