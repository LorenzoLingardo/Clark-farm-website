import React, {useState} from "react"
import { Button, Modal } from "react-bootstrap";

const CovidHeader = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="covidMain ff-serif">
            <h1 className="covidText fs-500 text-dark">
                Click <a href="" onClick={handleShow}> here</a> for our COVID information
                <Modal show={show} onHide={handleClose} animation={false}>
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