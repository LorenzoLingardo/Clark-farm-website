import React, {useState} from "react";
import { Button, Modal } from "react-bootstrap";

const CovidBanner = () => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div className="ff-serif bg-accent fs-500 text-dark">
            <div>
                For our COVID regulations, click<Button className="modalBtn" style={{"text-decoration": "none", "font-size": "var(--fs-500)"}} onClick={handleShow} variant="link">here</Button>
            </div>
            <Modal show={show} onHide={handleClose} animation={false} id="covidModal">
                <Modal.Header closeButton>
                    <Modal.Title>COVID Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>COVID Info!</Modal.Body>
            </Modal>
        </div>
    )
}

export default CovidBanner;