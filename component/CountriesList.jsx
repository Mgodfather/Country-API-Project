import { useEffect, useState } from 'react';
import CountryCard from './CountryCard'
import CountryListShimmer from './CountryListShimmer';

export default function CountriesList({ query }) {

    const [CountriesData, setContriesData] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(respone => respone.json())
            .then((data) => {
                setContriesData(data)
            });
    }, [])


    return (
        <>
            {!CountriesData.length ? <CountryListShimmer /> :
                <section className="all-cards-section">{
                    CountriesData.filter((e) => (e.name.common.toLowerCase().includes(query)))
                        .map((e) =>
                            <CountryCard
                                key={e.name.common}
                                countryName={e.name.common}
                                population={new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(e.population)}
                                region={e.region}
                                capital={e.capital?.[0]}
                                flag={e.flags.png}
                                data={e}
                            />
                        )

                }</section>}
        </>
    )
}

