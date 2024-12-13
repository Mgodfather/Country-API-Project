import { useState } from 'react'
import CountriesList from './CountriesList'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import {useTheme} from '../hooks/useTheme'

export default function Home() {
    const [query, setQuery] = useState('')
    const[isDark] = useTheme()
    
    function clickEventHandel() {
        document.querySelector('.overlay').classList.toggle('drop-down')
        let dropDownIconRotate = document.querySelector("div.filter-container > div.filter-btn > i")
        dropDownIconRotate.classList.toggle('rotate')
    }
    
    
    return (
        <>
            <main className={`${isDark ? 'dark' : ''}`}>
                <div className="error">
                    <i className="bx bx-error-circle"></i>
                    <span>country not found</span>
                </div>
                <section className="search-and-filter-container">
                    <SearchBar setQuery={setQuery} />
                    <SelectMenu dropDownMenu={clickEventHandel} />
                </section>
                <CountriesList query={query} />
            </main>
        </>
    )
}
