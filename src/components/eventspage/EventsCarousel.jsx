import React from 'react'
import { Carousel } from 'react-bootstrap'
import nativityData from '../data/nativityData'

const EventsCarousel = () => {
    return (
        <div className="events-main grid">
            {
                <Carousel className='events-carousel' interval={10000}>{
                    nativityData.map(content => {
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