import React from 'react'
import { Button, Container } from 'react-bootstrap';
import nativityData from '../data/nativityData';

const EventsDesc = props => {
    return (
        <div className='events-desc'>
            <h1 className='fs-700'>{props.title}</h1>
            <h2 className='fs-400'>{props.dates}</h2>
            <h3 className='fs-400'>{props.prices}</h3>
            <div className='icon-container'>
                <i class="fas fa-biohazard fa-2x">
                    <h6>
                        This thing 1
                    </h6>
                </i>
                <i class="fas fa-biohazard fa-2x">
                    <h6>
                        This thing 2
                    </h6>
                </i>
                <i class="fas fa-biohazard fa-2x">
                    <h6>
                        This thing 3
                    </h6>
                </i>
                <i class="fas fa-biohazard fa-2x">
                    <h6>
                        This thing 4
                    </h6>
                </i>
            </div>
            <h4 className='fs-400'>{props.desc}</h4>
            <Button className=''>Buy stuff</Button>
        </div>
    )
}

export default EventsDesc;