import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export const ImagesUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedFiles) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFiles);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFiles]);

  const onSelectFiles = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFiles(undefined);
      return;
    }
    setSelectedFiles(e.target.files[0]);
  };
  return (
    <div>
      <Form>
        <Form.Group controlId="formEventImages">
          <Form.Label>Images</Form.Label>
          <Form.Control
            multiple
            type="file"
            placeholder="Upload Images"
            name="images"
            id="image_input"
            accept="image/*"
            onChange={onSelectFiles}
          />
        </Form.Group>
      </Form>
      {selectedFiles && <img className="image-upload" src={preview} alt=""/>}
    </div>
  );
};
