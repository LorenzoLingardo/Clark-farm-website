import React from "react"
import { Link } from "react-router-dom";

const Dropdown = () => {
    return(
        <div className="dropDown">
            <button className="dropDownBtn">
                Test Dropdown
            </button>
            <div className="dropDown-content">
                <Link to ="/">
                    Number One
                </Link>
                <Link to ="/">
                    Number Two
                </Link>
                <Link to ="/">
                    Number Three
                </Link>
            </div>
        </div>
    )
}

export default Dropdown;