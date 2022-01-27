import React from 'react'
import { Container } from 'react-bootstrap'
import EventCarousel from './EventCarousel'
import EventDesc from './EventDesc'
import EventBtmContent from './EventBtmContent'
// import eventsData from '../data/eventsData'

const Event = () => {

    return (
        <div>
            <Container className='event-grid grid'>
                <EventCarousel />
                {/* {
                    eventsData.map(content => {
                        return (
                            <div className="bg-white">
                                <EventsDesc key={content.id} {...content}/>
                            </div>
                        )
                    })
                } */}
                <EventDesc/>
            </Container>
            <div className='add-info bg-accent grid'>
                <h4>Additional Information</h4>
            </div>
            <EventBtmContent/>
        </div>
    )
}

export default Event;