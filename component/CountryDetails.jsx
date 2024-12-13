import { useState } from "react";
import { useEffect } from "react";
import './country.css'
import { Link, useParams, useLocation } from "react-router-dom";
import {useTheme} from "../hooks/useTheme";

const CountryDetails = () => {

    const { state } = useLocation()
    const [isDark] = useTheme()

    const [countryData, setCountryData] = useState(null)

    const params = useParams()
    const countryName = params.country


    function updateCountryData(data) {
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
            borders: []
        })

        if (!data.borders) {
            data.borders = []
        }

        Promise.all(data.borders.map((border) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                .then((res) => res.json())
                .then(([borderData]) => borderData.name.common)
        }))
            .then((borders) => {
                setCountryData((prevState) => ({ ...prevState, borders }))
            })
    }

    useEffect(() => {

        if (state) {
            updateCountryData(state)
            return
        }

        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
            .then((res) => res.json())
            .then(([data]) => {
                updateCountryData(data)
            })

    }, [countryName])



    return (
        countryData && (<main className={`${isDark ? 'dark' : ''}`}> 
            <section className="country-main">
                <button onClick={() => history.back()} className="back-btn"><span><i className='bx bx-arrow-back'></i>back</span></button>

                <div className="country-info-container">

                    <img src={countryData.flag} alt={countryData?.flags?.png} />

                    <section className="country-details-section">
                        <h3>{countryData.commonName}</h3>

                        <p className="details-card">
                            <span>
                                <b>native name: </b>{countryData.nativeName}
                            </span>
                            <span><b>population: </b>{countryData?.population?.toLocaleString('en-IN')}</span>
                            <span><b>region: </b>{countryData.region}</span>
                            <span><b>sub region: </b>{countryData.subregion}</span>
                            <span><b>capital: </b>{countryData.capital}</span>
                            <span><b>maps: </b><a href={countryData.map} target="_blank">open in map</a>, <a href={countryData.streetView} target="_blank">open street view</a></span>
                            <span><b>currencies: </b>{countryData.currency} ({countryData.symbol})</span>
                            <span><b>languages: </b>{countryData.lang}</span>
                        </p>
                        {countryData.borders.length !== 0 && <div className="other-countries-links-container">
                            <b>Border countries:</b>
                            <div className="border-box-container">
                                {
                                    countryData.borders.map((border) => {
                                        return <Link key={border} to={`/${border}`}>{border}</Link>
                                    })
                                }
                            </div>
                        </div>}

                    </section>

                </div>

            </section>
        </main>)
    )
}

export default CountryDetails
