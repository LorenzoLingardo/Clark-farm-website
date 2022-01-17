import React from "react"
import { Link } from "react-router-dom";

const Dropdown = (props) => {
    return(
        <div className="dropDown text-dark">
            <div className="dropDown-content text-dark">
                <Link to ="/">
                    {props.one}
                </Link>
                <Link to ="/">
                    {props.two}
                </Link>
                <Link to ="/">
                    {props.three}
                </Link>
            </div>
        </div>
    )
}

export default Dropdown;