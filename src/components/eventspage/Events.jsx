import React from 'react'

const Events = props => {
    return (
        <div>
            <h2>{props.title}</h2>
            <div className='events-main'>
            <img src="https://placeimg.com/640/480/nature" className='events-img' alt={props.alt}/>
            {/* <img src={props.eventImg} className='event-img' alt={props.alt}/> */}
            <p>
                {props.desc}
            </p>
            </div>
        </div>
        
    )
}

export default Events