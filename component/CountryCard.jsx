import {Link} from "react-router-dom"

export default function CountryCard({countryName, population, region, capital, flag}) {
    return (
        <Link to={`country?name=${countryName}`} className="country-card">
            <img src={flag} alt=""/>
                <div className="card-text">
                    <h3>{countryName}</h3>
                    <p><b>population: </b>{population}</p>
                    <p><b>Region: </b>{region}</p>
                    <p><b>Capital: </b>{capital}</p>
                </div>
        </Link>
    )
}
