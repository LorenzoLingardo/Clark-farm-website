import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../../Footer'
import Header from '../../Header'
import EventsCarousel from './EventsCarousel'
import EventsDesc from './EventsDesc'

const EventsPage = () => {
    return (
        <div>
            <Header/>
            <Container className='events-grid grid'>
                <EventsCarousel />
                <EventsDesc 
                    title="Event 1" 
                    dates="April 4, May 17, 2022  10 AM-4PM" 
                    prices="Tickets $5 for ages 5+" 
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
            </Container>
            <Footer/>
        </div>
    )
}

export default EventsPage