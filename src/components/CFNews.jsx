import React from 'react'
import News from './News'

const CFNewsArray = [
    {
        id: 1,
        title: "Event 1",
        desc: "This is event 1",
        newsImg: "nativity.jpg",
        alt: "1"
    },
    {
        id: 2,
        title: "Event 2",
        desc: "This is event 2",
        newsImg: "nativity.jpg",
        alt: "2"
    },
    {
        id: 3,
        title: "Event 3",
        desc: "This is event 3",
        newsImg: "nativity.jpg",
        alt: "3"
    }
]

const CFNews = () => {
    return (
        <div className="grid">
            {
                CFNewsArray.map(content => {
                    return(
                        <div className="bg-white">
                            <News key={content.id} {...content}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CFNews;