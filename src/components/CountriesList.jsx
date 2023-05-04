import { Link } from "react-router-dom";
function CountriesList({countries}) {
    return (
        <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <div className="list-group">
                {countries.map((country, k) => (
                    <div className="list-group-item list-group-item-action list-country-container" key={k}>
                        <img className="list-image" src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="imagen" />
                        <div>
                            <Link className={"link-styles"} to={country.alpha3Code}> {country.name.common}</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )   
}

export default CountriesList;