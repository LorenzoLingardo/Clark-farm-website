import React from "react"

const MainOptions = props => {
    return (
        <div> 
            {props.title}
            <img src={props.img} alt=""/>
        </div>
    )
}

export default MainOptions;