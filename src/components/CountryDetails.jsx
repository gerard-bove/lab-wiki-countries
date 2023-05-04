import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function CountryDetail({countries, define_state}) {
    const [country, setCountry] = useState(define_state);
    const { idCountry } = useParams();
    
    useEffect(() => {
      axios(`https://ih-countries-api.herokuapp.com/countries/${idCountry}`)
      .then(result => {
        setCountry(result.data);
      })
      .catch(err => console.log(err));
    }, [idCountry])
    
    return (
        <div className="col-7">
          {country ? 
          <div>
            <img className='country-image' src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} />
            <h1>{country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul style={{listStyleType: 'none'}}>
                        {country.borders.map((border, k) => {

                            const borderCountry = countries.find((country) => country.alpha3Code === border)
                        
                        return (
                            <li style={{height: '40px'}} key={k}><Link className={"link-styles"} to={`/${border}`}>{borderCountry.name.common}</Link> <img className='list-image' src={`https://flagpedia.net/data/flags/icon/72x54/${borderCountry.alpha2Code.toLowerCase()}.png`} alt={borderCountry.name.common} /></li>
                        )})}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> :
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          }
        </div>
    )
}

export default CountryDetail;