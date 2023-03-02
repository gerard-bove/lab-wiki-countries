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
    console.log("fase de montaje");
    
    axios.get("https://ih-countries-api.herokuapp.com/countries")
    .then(response => {
      setCountries(response.data);
      console.log(response.data)
    })
    .catch(err => {
        console.log(err);
    })

  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        {countries ? <div className="row">
          <CountriesList countries={countries}/>
          <Routes>
            <Route path="/:idCountry" element={ <CountriesDetails countries={countries} /> } />
          </Routes>
          </div> : <img src="https://tenor.com/es/view/loading-gif-9212724" />}
        
        </div>
    </div>
  );
}
export default App;