import React from 'react'
import { Container } from 'react-bootstrap'
import EventCarousel from './EventCarousel'
import EventDesc from './EventDesc'
import EventBtmContent from './EventBtmContent'
import eventsData from '../data/eventsData';
import { useParams } from 'react-router';

const Event = () => {
    const { id } = useParams()
    const event = eventsData.find(event=> event.id === id)
    return (
        <div>
            <Container className='event-grid grid'>
                <EventCarousel event={event}/>
                <EventDesc event={event}/>
            </Container>
            <div className='add-info bg-accent grid'>
                <h4>Additional Information</h4>
            </div>
            <EventBtmContent/>
        </div>
    )
}

export default Event;