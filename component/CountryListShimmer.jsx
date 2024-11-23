import React from 'react'
import './listShimmer.css'

export default function CountryListShimmer() {

    // 1st way
    // new Array(10).fill(undefined).map((el) => {
    //     console.log(el);
    // })

    // 2md way, we using this
    // const mapped = Array.from({length:10}).map((el, i) => {
    //     return <div key={i} className="country-card shimmer-card"></div>
    //  })
    //  console.log(mapped);

    return (
        <section className="all-cards-section">
            {
                Array.from({ length: 10 }).map((el, i) => {
                    return <div key={i} className="country-card shimmer-card"></div>
                })
            }
        </section>
    )
}
