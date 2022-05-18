import React from "react";
import "./App.css";
import CountryList from "./components/CountryList/CountryList";
import SearchBox from "./components/SearchBox/SearchBox";
import Bg from "./components/Background/Bg";
import FeedbackButton from "./components/Feedback/FeedbackButton";
// import background from "./components/background.jpg";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      countries: [],
      stats: [],
      searchField: '',
    };
  }

  async componentDidMount() {
    const resp = await fetch("https://covid-19.dataflowkit.com/v1");
    const countries = await resp.json();
    this.setState({ countries });
    this.state.countries.forEach(async (country) => {
      const resp = await fetch(
        `https://covid-19.dataflowkit.com/v1/${country.Country_text}`
      );
      const data = await resp.json();
      // console.log(country.Country_text,data);
      // if (country.Country_text!=undefined)
      this.setState((prevState) => ({
        stats: prevState.stats.concat({
          ...data[data.length - 1],
          Country_text: country.Country_text || '',
          active: String(parseInt(String(country['Total Cases_text']).split(',').join('')) - parseInt(String(country['Total Deaths_text']).split(',').join('')) - parseInt(String(country['Total Recovered_text']).split(',').join(''))).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
          confirmed: country['Total Cases_text'],
          deaths: country['Total Deaths_text'],
          recovered: country['Total Recovered_text'],
        }),
      }));
    });
    
    // Simple GET request to activate dynos for our feedback application
    // deployed on heroku.
    try{
      var http = require("http");
      setInterval(function() {
          http.get("https://ayushjain-forms.herokuapp.com/");
      }, 900000); // every 15 minutes (900000)
    } catch {
      console.log('cant say');
    }
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { stats, searchField } = this.state;

    const filteredCountries = stats.filter((country) => {
      if(searchField===''){
        return true;
      }
      else{
        return country.Country_text.toLowerCase().includes(searchField.toLowerCase());
      }
    });
    return (
      <>
        <Bg/>
        <FeedbackButton/>
        <div className="App">
          <h1 className="heading">CoVID-19 Stats Web App</h1>
          <SearchBox
            placeholder="Enter country name ..."
            handleChange={this.handleChange}
          />
          <CountryList stats={filteredCountries} />
        </div>
      </>
    );
  }
}

export default App;
