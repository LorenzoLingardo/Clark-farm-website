import React from "react"
import EventBtm from "./EventBtm"

const EventsBottomArray = [
    {
        id: 1,
        desc: "Option 1",
        img: "https://placeimg.com/640/480/nature"
    },
    {
        id: 2,
        desc: "Option 2",
        img: "https://placeimg.com/640/480/nature"
    },
    {
        id: 3,
        desc: "Option 3",
        img: "https://placeimg.com/640/480/nature"
    }
]

const EventBtmContent = () => {
    return (
        <div className="events-bottom-grid grid">
            {
                EventsBottomArray.map(content => {
                    return(
                        <div className="bg-white" style={{"textAlign": "center"}}>
                            <EventBtm key={content.id} {...content}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default EventBtmContent;