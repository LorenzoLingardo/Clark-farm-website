import React from "react"

const Main = props => {
    return (
        <main className="main">
            <h1 className="mainTitle">
                Main Title
            </h1>
            <h1 className="mainContent">
                {props.fact}
            </h1>
        </main>
    )
}

export default Main;