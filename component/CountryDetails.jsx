import { useState } from "react";
import { useEffect } from "react";
import './country.css'

const CountryDetails = () => {

    const [countryData, setCountryData] = useState(null)

    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop), // get country name from the url
    });
    let value = params.name;


    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${value}?fullText=true`)
            .then((res) => res.json())
            .then(([data]) => {
                setCountryData({
                    flag: data.flags.svg,
                    commonName: data.name.common,
                    nativeName: Object.values(data.name)[1],
                    population: data.population,
                    region: data.region,
                    subregion: data?.subregion,
                    capital: data?.capital,
                    maps: data.maps.googleMaps,
                    streetView: data.maps.openStreetMaps,
                    currency: Object.values(data.currencies)[0].name,
                    symbol: Object.values(data.currencies)[0].symbol,
                    lang: Object.values(data.languages).join(', '),
                }
                )
            })
    }, [])

    console.log(countryData);

    return (
       countryData && (<main className="country-main">
            <button className="back-btn"><span><i className='bx bx-arrow-back'></i>back</span></button>

            <div className="country-info-container">

                <img src={countryData.flag} alt={countryData?.flags?.png} />

                <section className="country-details-section">
                    <h3>{countryData.commonName}</h3>

                    <p className="details-card">
                        <span>
                            <b>native name: </b>{countryData.nativeName}
                        </span>
                        <span><b>population: </b>{countryData.population.toLocaleString('en-IN')}</span>
                        <span><b>region: </b>{countryData.region}</span>
                        <span><b>sub region: </b>{countryData.subregion}</span>
                        <span><b>capital: </b>{countryData.capital}</span>
                        <span><b>maps: </b><a href={countryData.map} target="_blank">open in map</a>, <a href={countryData.streetView} target="_blank">open street view</a></span>
                        <span><b>currencies: </b>{countryData.currency} ({countryData.symbol})</span>
                        <span><b>languages: </b>{countryData.lang}</span>
                    </p>
                    <div className="other-countries-links-container">
                        <b>Border countries:</b>
                        <div className="border-box-container">
                        </div>
                    </div>

                </section>

            </div>

        </main>)
    )
}

export default CountryDetails
