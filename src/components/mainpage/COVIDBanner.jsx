import React, {useState} from "react";
import { Button, Modal} from "react-bootstrap";

const CovidBanner = () => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div className="ff-sans-cond bg-accent fs-300 text-dark">
            <div className="banner-content">
                <div className="banner-text flex">
                    <i className="fas fa-info-circle"></i>
                    {`The safety of our visitors and volunteers is important to us. For information about our COVID-19 policies,`}
                        <Button className="banner-link fs-300" style={{textDecoration: "none", "padding-left": "0px"}} onClick={handleShow} variant="link">click here</Button>
                </div>
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