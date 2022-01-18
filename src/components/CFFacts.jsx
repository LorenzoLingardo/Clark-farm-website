import React from "react"

const CFFacts = props => {
    return (
        <div className="cfFacts">
            <h1 className="factsContent fs-400 bg-white">
                {props.fact}
            </h1>
        </div>
    )
}

export default CFFacts;