import React from "react"

const Dropdown = () => {
    return(
        <div className="dropDown">
            <button className="dropDownBtn">
                Test Dropdown
            </button>
            <div className="dropDown-content">
                <a href="#">
                    Number One
                </a>
                <a href="#">
                    Number Two
                </a>
                <a href="#">
                    Number Three
                </a>
            </div>
        </div>
    )
}

export default Dropdown;