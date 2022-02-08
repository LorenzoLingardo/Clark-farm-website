import React from "react"
import MainOptions from "./MainOptions"

const MainOptionsDescArray = [
    {
        id: 1,
        title: "Upcoming Events",
        img: "https://placeimg.com/640/480/animals",
        link: "events"
    },
    {
        id: 2,
        title: "Volunteer",
        img: "https://placeimg.com/640/480/architecture",
        link: "volunteer"
    },
    {
        id: 3,
        title: "About Us",
        img: "https://placeimg.com/640/480/nature",
        link: "aboutus"
    }
]

const MainOptionsDesc = () => {
    return (
        <div className="mainOptions ff-sans-cond flex">
            {
                MainOptionsDescArray.map(content => {
                    return(
                        <div className="mainOptionsContent bg-white">
                            <MainOptions key={content.id} {...content}/>
                            <a style={{textDecoration: "none"}} href={`/${content.link}`}>{content.title}</a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MainOptionsDesc;