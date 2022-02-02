import React from 'react'
import { Button } from 'react-bootstrap';


const EventDesc = ({event}) => {
    
    return (
        <div className='events-desc'>
            <h1 className='fs-700'>{event.title}</h1>
            <h2 className='fs-400'>{event.dates}</h2>
            <h3 className='fs-400'>{event.prices}</h3>
            <div className='icon-container'>
                <i className="fas fa-biohazard fa-2x">
                    <h6>
                        This thing 1
                    </h6>
                </i>
                <i className="fas fa-biohazard fa-2x">
                    <h6>
                        This thing 2
                    </h6>
                </i>
                <i className="fas fa-biohazard fa-2x">
                    <h6>
                        This thing 3
                    </h6>
                </i>
                <i className="fas fa-biohazard fa-2x">
                    <h6>
                        This thing 4
                    </h6>
                </i>
            </div>
            <h4 className='fs-400'>{event.desc}</h4>
            <Button>Buy stuff</Button>
        </div>
    )
}

export default EventDesc;