import React, {useState} from "react"
import { Button, Modal } from "react-bootstrap";

const CovidHeader = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="covidMain ff-serif bg-accent flex">
            <h1 className="fs-500 text-dark">
                Click <Button onClick={handleShow} variant="link"> here </Button> for our COVID information
                <Modal show={show} onHide={handleClose} animation={false} id="covidModal">
                    <Modal.Header closeButton>
                        <Modal.Title>COVID Info</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>COVID Info!</Modal.Body>
                </Modal>
            </h1>
        </div>
    )
}

export default CovidHeader;