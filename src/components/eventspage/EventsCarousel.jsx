import React from 'react'
import { Carousel } from 'react-bootstrap'
import eventsData from '../data/eventsData'

const EventsCarousel = () => {
    return (
        <div className="events-main grid">
            {
                <Carousel className='events-carousel' interval={10000}>{
                    eventsData.map(content => {
                        return(
                                <Carousel.Item>
                                    <img 
                                        src={content.eventImg} 
                                        className='events-img' 
                                        alt={content.alt}/>
                                </Carousel.Item>
                        )
                    })
                }
                </Carousel>
            }
        </div>
    )
}

export default EventsCarousel;