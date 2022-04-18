import React from "react";
import {
  addNewEvent,
  deleteEvent,
  getDocData,
  overwriteEvent,
} from "../../services/events";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { ImageUpload } from "./ImageUpload";

const AdminMain = () => {
  const [mainFormData, setMainFormData] = useState({
    title: "",
    date: "",
    desc: "",
    images: [""],
    prices: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMainFormData((prevMainFormData) => {
      return {
        ...prevMainFormData,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formEventTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            name="title"
            value={mainFormData.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formEventDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Dates"
            name="date"
            value={mainFormData.date}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formEventDesc">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            name="desc"
            value={mainFormData.desc}
            onChange={handleChange}
          />
        </Form.Group>
        {/* Image Form */}
        <ImageUpload/>
        <Form.Group controlId="formEventPrices">
          <Form.Label>Prices</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Prices"
            name="prices"
            value={mainFormData.prices}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      <button onClick={() => addNewEvent(mainFormData)}>Add</button>
      <button onClick={() => overwriteEvent(mainFormData)}>Update</button>
      {/* <button onClick={() => deleteEvent}>Delete</button> */}
      <button onClick={() => getDocData()}>Beep Bop</button>
    </div>
  );
};

export default AdminMain;
