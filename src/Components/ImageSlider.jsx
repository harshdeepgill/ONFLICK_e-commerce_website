import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {Button} from "@chakra-ui/react"
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState(0);
  const prevImage = () => {
    const newIndex = (images.length - 1 + currentIndex) % images.length;
    setCurrentIndex(newIndex);
  };
  const nextImage = () => {
    if (currentIndex === images.length - 1) {
      // If the current image is the last one, set currentIndex to 0 and position to 0 (first image)
      setCurrentIndex(0);
      setPosition(0);
    } else {
      const newIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(newIndex);
      setPosition(-newIndex * 100);
    }
  };
  useEffect(()=>{
    const intervalId = setInterval(() => {
      nextImage();
      setPosition(-currentIndex * 100); // Adjust the position for smooth sliding
    }, 2000);
    return () =>{
      clearInterval(intervalId)
    }
  }, [currentIndex])
  return (
    <DIV>
      <ImageContainer style={{ transform: `translateX(${position}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            style={{ minWidth: "100vw" }}
          />
        ))}
      </ImageContainer>
      <IndicatorContainer>
        {images.map((_, index) => (
          <CustomButton
            key={index}
            size="sm"
            variant="ghost"
            onClick={() => {
              setCurrentIndex(index);
              setPosition(-index * 100);
            }}
            isActive={currentIndex === index}
          />
        ))}
      </IndicatorContainer>
    </DIV>
  );
};

export default ImageSlider;

const DIV = styled.div`
  position: relative;
  width: 100vw; /* Set the width to 100% of the viewport width */
  overflow: hidden; /* Hide any overflow */
`;

const ImageContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease; /* Add a transition for smooth sliding */

`;

const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const CustomButton = styled(Button)`
  width: 20px; /* Set the button width */
  height: 20px; /* Set the button height */
  border-radius: 50%; /* Make the button perfectly circular */
  margin: 0 5px; /* Add some margin between the dots */

  &:hover {
    background-color: darkslategray; /* Change the background color on hover */
  }
`

