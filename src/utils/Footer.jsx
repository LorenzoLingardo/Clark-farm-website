import React from "react"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="ff-sans-normal text-dark">
            <div className="footer flex p-2">
                <Link to ="https://www.facebook.com/clarkhistoricfarm/">
                    <i className="fab fa-facebook fa-2x"></i>
                </Link>

                <Link to ="https://www.instagram.com/clarkhistoricfarm/">
                    <i className="fab fa-instagram fa-2x"></i>
                </Link>

                <h4 className="fs-400">
                    Friends of Clark Historic Farm © 2022 All Rights Reserved
                </h4>
            </div>
        </div>
    )
}

export default Footer;