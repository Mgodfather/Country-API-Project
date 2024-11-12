import React from 'react'

const SelectMenu = ({dropDownMenu}) => {
  return (
    <div className="filter-container">
                <div onClick={dropDownMenu} className="filter-btn">
                    <span>Filter by Region </span>
                    <i className="bx bx-chevron-down"></i>
                </div>
                <div className="filter-options">
                    <div className="overlay dark">
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