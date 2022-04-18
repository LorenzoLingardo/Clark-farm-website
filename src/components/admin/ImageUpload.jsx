import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  return (
    <div>
      <Form>
        <Form.Group controlId="formEventImages">
          <Form.Label>Images</Form.Label>
          <Form.Control
            type="file"
            placeholder="Upload Images"
            name="images"
            id="image_input"
            accept="image/*"
            onChange={onSelectFile}
          />
        </Form.Group>
      </Form>
      {selectedFile && <img className="image-upload" src={preview} alt=""/>}
    </div>
  );
};
