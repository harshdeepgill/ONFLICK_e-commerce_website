import React from 'react';
import CategoryGrid from './CategoryGrid/CategoryGrid'
import ImageSlider from './ImageSlider';
import styled from 'styled-components';
import { Flex, Heading , Text} from '@chakra-ui/react';

const urls = [
  "https://assets.myntassets.com/f_webp,w_404,c_limit,fl_progressive,dpr_2.0/assets/images/2023/9/16/c8d03b7a-2115-403a-9079-099bb1bc163a1694878389211-Desktop-Phase_1-DK-Main-Banner.jpg",
  "https://assets.myntassets.com/f_webp,w_404,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg",
  "https://assets.myntassets.com/f_webp,w_404,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg",
  "https://assets.myntassets.com/f_webp,w_404,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg",
  "https://assets.myntassets.com/f_webp,w_404,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.jpg",
  "https://assets.myntassets.com/f_webp,w_404,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg",
  "https://assets.myntassets.com/f_webp,w_404,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/84b6a214-9eb3-49eb-9f9d-72cec56ec5d71659019908592-Indian-Wear_DK--1-.jpg",
  "https://assets.myntassets.com/f_webp,w_404,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg",
  "https://assets.myntassets.com/f_webp,w_277,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/6107d28b-2bcb-44e6-9743-655b54550b8f1659020199598-Workwear_Desk--1-.jpg",
];

const WOLoginHome = () => {
  return (
    <div>
      <GIFDIV>
        <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"} w={"100%"} height={"100%"}>
          <Heading as='h2' size='2xl' >SALE SALE SALE</Heading>
          <Text>ENJOY UPTO 50% OFF ON ICONIC BRANDS</Text>
        </Flex>
      </GIFDIV>
      <ImageSlider images={urls}/>
      <CategoryGrid/>
    </div>
  )
}

export default WOLoginHome

const GIFDIV = styled.div`
  width: 100%;
  height: 200px;
  background-image: url("https://i.gifer.com/7MpT.gif");

`