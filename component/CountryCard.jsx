import {Link} from "react-router-dom"

const CountryCard = ({countryName, population, region, capital, flag, data}) => {
    return (
        <Link to={countryName} className="country-card" state={data}>
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

export default CountryCard