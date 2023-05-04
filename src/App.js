// src/App.js
import "./App.css";
// import countriesData from './countries.json'
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountriesDetails from "./components/CountryDetails";
import { Route, Routes } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState(null)
  
  useEffect(()=>{    
    axios.get("https://ih-countries-api.herokuapp.com/countries")
    .then(response => {
      setCountries(response.data);
    })
    .catch(err => {
        console.log(err);
    })
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        {countries ? 
          <div className="row">
            <CountriesList countries={countries}/>
            <Routes>
              <Route path="/:idCountry" element={ <CountriesDetails countries={countries} define_state={null} /> } />
            </Routes>
          </div> : 
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        }
      </div>
    </div>
  );
}
export default App;