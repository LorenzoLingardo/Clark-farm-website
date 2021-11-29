import React from "react"

const CFFacts = props => {
    return (
        <div className="mainFacts">
            <h1 className="factsContent">
                {props.fact} 
            </h1>
        </div>
    )
}

export default CFFacts;