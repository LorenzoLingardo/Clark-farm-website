import React from "react"
import MainOptions from "./MainOptions"

const MainOptionsDescArray = [
    {
        id: 1,
        title: "Upcoming Events",
        img: "https://placeimg.com/640/480/animals",
        link: ""
    },
    {
        id: 2,
        title: "Volunteer",
        img: "https://placeimg.com/640/480/architecture",
        link: ""
    },
    {
        id: 3,
        title: "About Us",
        img: "https://placeimg.com/640/480/nature",
        link: ""
    }
]

const MainOptionsDesc = () => {
    return (
        <div className="mainOptions ff-sans-cond grid">
            {
                MainOptionsDescArray.map(content => {
                    return(
                        <div className="mainOptionsContent bg-white">
                            <MainOptions key={content.id} {...content}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MainOptionsDesc;