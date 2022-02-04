import React from "react"

const MainOptions = props => {
    return (
        <div> 
            {props.title}
            <img src={props.img} alt=""/>
            <a href={props.link}>This thing</a>
        </div>
    )
}

export default MainOptions;