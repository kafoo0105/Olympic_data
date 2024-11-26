import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const ImageItem = styled.div`
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlaceholderMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #7d7d7d;
  margin-top: 2rem;
  font-style: italic;
`;

const ImageGrid = ({ images }) => {
  return (
    <GridContainer>
      {images.length === 0 ? (
        <PlaceholderMessage>이미지가 없습니다. 이미지를 업로드해주세요!</PlaceholderMessage>
      ) : (
        images.map((image, index) => (
          <ImageItem key={index}>
            <StyledImage src={image} alt={`Uploaded ${index + 1}`} />
          </ImageItem>
        ))
      )}
    </GridContainer>
  );
};

export default ImageGrid;
