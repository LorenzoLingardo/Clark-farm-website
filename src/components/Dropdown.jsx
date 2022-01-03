import React from "react"
import { Link } from "react-router-dom";

const Dropdown = () => {
    return(
        <div className="dropDown">
            <i class="fas fa-dungeon fa-3x"></i>
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