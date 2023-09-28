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
`;
export default ImageSlider;
// const urls = [
//   "https://assets.myntassets.com/f_webp,w_404,c_limit,fl_progressive,dpr_2.0/assets/images/2023/9/16/c8d03b7a-2115-403a-9079-099bb1bc163a1694878389211-Desktop-Phase_1-DK-Main-Banner.jpg",
//   "https://assets.myntassets.com/f_webp,w_404,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg",
//   "https://assets.myntassets.com/f_webp,w_404,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg",
//   "https://assets.myntassets.com/f_webp,w_404,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg",
//   "https://assets.myntassets.com/f_webp,w_404,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.jpg",
//   "https://assets.myntassets.com/f_webp,w_404,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg",
//   "https://assets.myntassets.com/f_webp,w_404,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/84b6a214-9eb3-49eb-9f9d-72cec56ec5d71659019908592-Indian-Wear_DK--1-.jpg",
//   "https://assets.myntassets.com/f_webp,w_404,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg",
//   "https://assets.myntassets.com/f_webp,w_277,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/6107d28b-2bcb-44e6-9743-655b54550b8f1659020199598-Workwear_Desk--1-.jpg",
  
// ];