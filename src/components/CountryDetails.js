import React from 'react';
import countriesList from '../countries.json';

class CountriesDetails extends React.Component {
  state = {
    name: '',
    //independent: false,
    status: '',
    capital: '',
    currency: '',
    region: '',
    subrigion: '',
    languages: '',
    //flag: '',
  };

  componentDidMount() {
    let countryId = this.props.match.params.cca3;
    let foundCountry = countriesList.find((country) => {
      return country.cca3 === countryId;
    });
    this.setState({
      name: foundCountry.name.official,
      // independent: false,
      status: foundCountry.status,
      capital: foundCountry.capital,
      currency: foundCountry.currency,
      region: foundCountry.region,
      subrigion: foundCountry.subrigion,
      languages: foundCountry.languages.por,
      //flag: foundCountry.flag,
    });
  }

  render() {
    return (
      <div>
        <h3> Details:</h3>
        <p>official name:{this.state.name.official}</p>
        {/* <p>{this.state.independent}</p>  */}
        <p>status:{this.state.status}</p>
        <p>Capital:{this.state.capital}</p>
        <p>Currency:{this.state.currency}</p>
        <p>Region:{this.state.region}</p>
        <p>Subrigion:{this.state.subrigion}</p>
        <p>Languages:{this.state.languages}</p>
        {/* <p> {this.state.flag}</p>  */}
      </div>
    );
  }
}

export default CountriesDetails;
