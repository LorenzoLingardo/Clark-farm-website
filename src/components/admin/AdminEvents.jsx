import React from "react"
import { Nav } from "react-bootstrap";

const AdminEvents = () => {

    //TODO map slugs and content for each individual task
    
    return (
        <div>
           <h1>Click the item you want to modify</h1>
           <div className="dashboard">
               <Nav>
                   <Nav.Item className="dashboard-button events">
                       <Nav.Link href="/admin/events/summer-concerts">Summer Concerts</Nav.Link>
                   </Nav.Item>
                   <Nav.Item className="dashboard-button education">
                       <Nav.Link href="/admin/events/honey-harvest">Honey Harvest Festival</Nav.Link>
                   </Nav.Item>
                   <Nav.Item className="dashboard-button volunteer">
                       <Nav.Link href="/admin/events/flapjacks">Flapjacks at the Farm</Nav.Link>
                   </Nav.Item>
                   <Nav.Item className="dashboard-button aboutus">
                       <Nav.Link href="/admin/events/nativity">Nativity</Nav.Link>
                   </Nav.Item>
                   <Nav.Item className="dashboard-button home">
                       <Nav.Link href="/admin/events/barnyard-babies">Barnyard Babies</Nav.Link>
                   </Nav.Item>
               </Nav>
           </div>
        </div>
    )
}

export default AdminEvents;