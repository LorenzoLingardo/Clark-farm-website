import React from "react"
import { Nav } from "react-bootstrap";

const AdminDashboard = () => {
    return (
        <div>
           <h1>Click the item you want to modify</h1>
           <div className="dashboard">
               <Nav>
                   <Nav.Item className="dashboard-button events">
                       <Nav.Link href="/admin/events">Events</Nav.Link>
                   </Nav.Item>
                   <Nav.Item className="dashboard-button education">
                       <Nav.Link href="/admin/education">Education</Nav.Link>
                   </Nav.Item>
                   <Nav.Item className="dashboard-button volunteer">
                       <Nav.Link href="/admin/volunteer">Volunteer</Nav.Link>
                   </Nav.Item>
                   <Nav.Item className="dashboard-button aboutus">
                       <Nav.Link href="/admin/aboutus">About Us</Nav.Link>
                   </Nav.Item>
                   <Nav.Item className="dashboard-button home">
                       <Nav.Link href="/admin/homepage">Home Page</Nav.Link>
                   </Nav.Item>
               </Nav>
           </div>
        </div>
    )
}

export default AdminDashboard;