import React, { useState } from "react";
import styled from "styled-components";
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevImage = () => {
    const newIndex = (images.length - 1 + currentIndex) % images.length;
    setCurrentIndex(newIndex);
  };
  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };
  return (
    <DIV>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <div>
        <button onClick={prevImage}></button>
        <button onClick={nextImage}></button>
      </div>
    </DIV>
  );
};
const DIV = styled.div`
  position: relative;
  max-width: 400px;
  margin: 0 auto;
  img {
    width: 100%;
    height: auto;
  }
  button {
    cursor: pointer;
    
  }
  div{
    text-align: center
  }
`;
export default ImageSlider;
