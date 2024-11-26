import React, { useState } from 'react';
import styled from 'styled-components';
import ImageUploader from '../components/ImageUploader';
import ImageGrid from '../components/ImageGrid';
import NavBar from '../components/NavBar';

const GalleryContainer = styled.div`
  max-width: 100vm;
  height: 100vh;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa, #e6f3ff);
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const GalleryHeader = styled.h1`
  text-align: center;
  color: #1a73e8;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Gallery = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (newImage) => {
    setImages([...images, newImage]);
  };

  return (
    <GalleryContainer>
      <NavBar></NavBar>
      <GalleryHeader>Photo Spot</GalleryHeader>
      <ImageUploader onImageUpload={handleImageUpload} />
      <ImageGrid images={images} />
    </GalleryContainer>
  );
};

export default Gallery;
