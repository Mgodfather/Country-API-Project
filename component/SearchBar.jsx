
export default function SearchBar({setQuery}) {
    return (
        <div className="search-conatiner">
            <i className="bx bx-search"></i>
            <input type="search" id="search" onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())} placeholder="search for a country.." />
        </div>
    )
}
