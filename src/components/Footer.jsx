import React from "react"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer ff-sans-normal flex">
            <Link to ="https://www.facebook.com/clarkhistoricfarm/">
                <i class="fab fa-facebook fa-3x text-accent"></i>
            </Link>
            <Link to ="https://www.instagram.com/clarkhistoricfarm/">
                <i class="fab fa-instagram fa-3x text-accent"></i>
            </Link>
                   
            <h4 className="footerMain fs-400 text-accent">
                Friends of Clark Historic Farm © 2013 All Rights Reserved
            </h4>
        </div>
    )
}

export default Footer;