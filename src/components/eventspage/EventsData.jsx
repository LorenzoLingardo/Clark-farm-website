import React from 'react'
import Events from './Events'

const EventsDataArray = [
    {
        id: 1,
        title: "Event 1",
        desc: "This is event 1",
        eventImg: "nativity.jpg",
        alt: "1"
    },
    {
        id: 2,
        title: "Event 2",
        desc: "This is event 2",
        eventImg: "nativity.jpg",
        alt: "2"
    },
    {
        id: 3,
        title: "Event 3",
        desc: "This is event 3",
        eventImg: "nativity.jpg",
        alt: "3"
    }
]

const EventsData = () => {
    return (
        <div className="grid">
            {
                EventsDataArray.map(content => {
                    return(
                        <div className="bg-white">
                            <Events key={content.id} {...content}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default EventsData;