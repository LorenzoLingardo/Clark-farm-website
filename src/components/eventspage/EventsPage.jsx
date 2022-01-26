import React from 'react'
import { Container } from 'react-bootstrap'
import EventsCarousel from './EventsCarousel'
import EventsDesc from './EventsDesc'
import EventsPageContent from './EventsPageContent'
import eventsData from '../data/eventsData'

const EventsPage = () => {
    return (
        <div>
            <Container className='events-grid grid'>
                <EventsCarousel />
                {/* {
                    eventsData.map(content => {
                        return (
                            <div className="bg-white">
                                <EventsDesc key={content.id} {...content}/>
                            </div>
                        )
                    })
                } */}
                <EventsDesc/>
            </Container>
            <div className='addInfo bg-accent grid'>
                <h4>Additional Information</h4>
            </div>
            <EventsPageContent/>
        </div>
    )
}

export default EventsPage;