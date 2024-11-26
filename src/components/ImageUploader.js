import React, { useState } from 'react';
import styled from 'styled-components';

const UploaderContainer = styled.div`
  border: 2px dashed ${({ dragActive }) => (dragActive ? '#007bff' : '#ccc')};
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  background-color: ${({ dragActive }) =>
    dragActive ? 'rgba(0, 123, 255, 0.1)' : 'transparent'};
  transition: all 0.3s ease;
`;

const HiddenInput = styled.input`
  display: none;
`;

const UploadLabel = styled.label`
  display: block;
  cursor: pointer;
`;

const UploadText = styled.p`
  margin-bottom: 1rem;
  color: #666;
  font-size: 1rem;
`;

const UploadButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ImageUploader = ({ onImageUpload }) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      onImageUpload(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <UploaderContainer
      dragActive={dragActive}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <HiddenInput
        type="file"
        id="image-upload"
        accept="image/*"
        onChange={handleChange}
      />
      <UploadLabel htmlFor="image-upload">
        <div>
          <UploadText>Drag and drop your image here or click to select</UploadText>
          <UploadButton>Choose a file</UploadButton>
        </div>
      </UploadLabel>
    </UploaderContainer>
  );
};

export default ImageUploader;
