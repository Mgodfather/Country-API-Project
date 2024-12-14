import React from 'react'

const SelectMenu = ({ dropDownMenu, setQuery }) => {

    const handelSelectOption = (e) => {
        if (e.target.classList.contains('overlay')) {
            return;
        }
        setQuery(e.target.innerText.toLowerCase())
    }

    return (
        <div className="filter-container">
            <div onClick={dropDownMenu} className="filter-btn">
                <span>Filter by Region </span>
                <i className="bx bx-chevron-down"></i>
            </div>
            <div className="filter-options">
                <div className="overlay dark" onClick={handelSelectOption}>
                    <span>Africa</span>
                    <span>America</span>
                    <span>Asia</span>
                    <span>Europe</span>
                    <span>Oceania</span>
                </div>
            </div>

        </div>
    )
}

export default SelectMenu