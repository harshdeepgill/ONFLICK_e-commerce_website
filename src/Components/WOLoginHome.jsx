import React, { useEffect, useState } from 'react';
import CategoryGrid from './CategoryGrid/CategoryGrid'
import ImageSlider from './ImageSlider';
import styled from 'styled-components';
import { Flex, Heading , Text} from '@chakra-ui/react';
import CardSwitcher from './CardSwitcher/CardSwitcher';
import SimpleTextCard from './Cards/SimpleTextCard';
import MainICC from './LangingComponents/ImageChangingComponent/mainICC';
import Logo from './Logo';
import SimpleImageTextCard from './LangingComponents/SimpleImageTextCard';
import BlackFriday from './LangingComponents/BlackFriday';
import LandingPageSkeleton from './LandingPageSkeleton';
import { Footer } from './Footer/Footer';
import {Link} from "react-router-dom";

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

const dummyData = [
  
  {
    id: 1,
    title: "Wooden Dining Table",
    price: 299.99,
    category: "Furniture",
    rating: 4.5,
    numVotes: 120,
    image: "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FWooden%20Dining%20Table.jpg?alt=media&token=0b4d7e7f-ca3c-4a2f-a858-c37a6113c653",
    description: "Elegant dining table for family meals."
  },
  {
    id: 2,
    title: "Leather Sofa Set",
    price: 699.99,
    category: "Furniture",
    rating: 4.2,
    numVotes: 95,
    image: "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FLeather%20Sofa.jpg?alt=media&token=23982c30-dc93-4536-99f5-8fdce276de57",
    description: "Luxurious leather sofa set for your living room."
  },
  {
    id: 3,
    title: "Bookshelf",
    price: 149.99,
    category: "Furniture",
    rating: 4.8,
    numVotes: 210,
    image: "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FBookshelf.jpg?alt=media&token=2468f964-5185-4f08-9f34-8bd4be971ebc",
    description: "Sturdy bookshelf for organizing your books."
  },

  {
    id: 6,
    title: "Coffee Table",
    price: 79.99,
    category: "Furniture",
    rating: 4.0,
    numVotes: 70,
    image: "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FCoffee%20Table.jpg?alt=media&token=b2ca30f4-553a-4974-beeb-ff1e0bf25c2e",
    description: "Simple and elegant coffee table."
  },
  {
    id: 7,
    title: "Wardrobe",
    price: 349.99,
    category: "Furniture",
    rating: 4.7,
    numVotes: 180,
    image: "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FWardrobe.jpg?alt=media&token=89cac6ed-e31b-49c0-aeae-43665ae342cf",
    description: "Spacious wardrobe for your clothes."
  },
  {
    id: 8,
    title: "Study Desk",
    price: 129.99,
    category: "Furniture",
    rating: 4.3,
    numVotes: 120,
    image: "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FStudy%20Desk.jpg?alt=media&token=f94ab811-1eb4-4c03-80c8-8194ef32abe2",
    description: "Compact study desk for your workspace."
  },
  {
    id: 9,
    title: "Recliner Chair",
    price: 299.99,
    category: "Furniture",
    rating: 4.5,
    numVotes: 105,
    image: "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FRecliner%20Chair.jpg?alt=media&token=23425ea7-d4bd-42eb-931f-5e9eee3236f7",
    description: "Comfortable recliner chair for relaxation."
  },
  {
    id: 10,
    title: "Side Table",
    price: 49.99,
    category: "Furniture",
    rating: 4.1,
    numVotes: 60,
    image: "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FSide%20Table.jpg?alt=media&token=36d7a680-2b80-473c-a197-7fc310ad95d2",
    description: "Convenient side table for your living space."
  }
]

const simpleImageSwitcher = [
  {
    image:"https://images.bewakoof.com/t1080/women-s-red-mickey-mouse-graphic-printed-oversized-sweatshirt-432380-1672833363-1.jpg",
    text: "MICKY"
  },
  {
    image:"https://images.bewakoof.com/t1080/men-s-black-zipper-sweatshirt-363696-1695639804-1.jpg",
    text: "BLUE"
  },
  {
    image:"https://images.bewakoof.com/t1080/inner-peace-half-sleeve-printed-t-shirt-black-295708-1655749271-1.jpg",
    text: "DATE"
  },
  {
    image:"https://images.bewakoof.com/t1080/women-s-black-wanderlust-graphic-printed-oversized-short-top-620597-1695381779-1.JPG",
    text: "WANDER"
  },
  {
    image:"https://images.bewakoof.com/t1080/women-s-black-be-curious-graphic-printed-oversized-t-shirt-620589-1695381817-1.jpg",
    text: "PRINT"
  },
  {
    image:"https://images.bewakoof.com/t1080/women-black-printed-tshirt-28-582041-1694171428-1.jpg",
    text: "SCARY"
  },
  {
    image:"https://images.bewakoof.com/t640/women-s-maroon-oversized-sweatshirt-596471-1695384234-1.jpg",
    text: "OVERSIZED"
  },
  {
    image:"https://images.bewakoof.com/t1080/women-s-black-solid-oversize-jogger-555636-1680593160-1.jpg",
    text: "JUMPSUIT"
  },
  {
    image:"https://images.bewakoof.com/t1080/women-s-black-one-with-the-universe-graphic-printed-boyfriend-t-shirt-483055-1688645226-4.jpg",
    text: "MINI"
  },
]

const productTextSwitcher = ["Bookshelf", "Wardrobe", "Hiking Boots", "Drawers", "Leather Sofa", "Recliner Chair","Bluetooth Earbuds", "Gaming Headset"];
const productTextSwitcherId = [3,7,23,5,2,9,13,14]
const productIdSwitcher = [3,7,23,5,2,9,13,14];

const WOLoginHome = () => {
  const [color, setColor] = useState(false);
  const [saleColor, setSaleColor] = useState(false);


  useEffect(()=>{
     setTimeout(()=>{
      setColor(prev => !prev);
    },1000);

    let intervalId = setInterval(()=> {
      setSaleColor(prev => !prev)
    },500)

    return () => {
      clearInterval(intervalId);
    }
  },[])

  if(!color){
    return (<LandingPageSkeleton/>)
  }
  return (
    <DIV>
<Link to="/productlist">
      {/* -------------GIF SECTION--------------------- */}
      <GIFDIV>
        <Flex  flexDirection={"column"} justifyContent={"center"} alignItems={"center"} w={"100%"} height={"100%"}>

          <Heading as='h2' size='2xl' letterSpacing={3}>MEGA SALE MADNESS<sapn style={saleColor?{color:"var(--primary1)", fontWeight:900}: {color:"white", fontWeight:900}}>!</sapn></Heading>
          <Text mt={3}>ENJOY UPTO 50% OFF ON ICONIC BRANDS</Text>
        </Flex>
      </GIFDIV>
      {/* -------------GIF SECTION--------------------- */}
      <BlackFriday/>

      {/* ------------------Image Slider 1------------------------ */}
      <ImageSlider images={urls}/>
      {/* ------------------Image Slider 1------------------------ */}
</Link>

      {/* ---------------------Category 1------------------------------------ */}
      <HEADDIV>
        <Heading>SHOP BY CATEGORY</Heading>
      </HEADDIV>
      <CategoryGrid/>
      {/* ---------------------Category 1------------------------------------ */}


    <div style={{display:"flex", flexDirection:"column", gap:"40px", marginTop:"60px"}}>
      <TRPDIV color={color}>
        <div>
          <Heading color={color?"#ef1b22":"black"}>TOP RATED PRODUCTS</Heading>
        </div>
      </TRPDIV>
      <CardSwitcher aboveShift={"45px"} center={true} slideWidth={window.innerWidth - (0.05*window.innerWidth)}>
        {productTextSwitcher.map((el,index) => <Link to={`/product_details/${productTextSwitcherId[index]}`}><SimpleTextCard p={"0.7rem"} dims={50} as={"h1"} size={"xl"} key={index} text={el}/></Link>)}
      </CardSwitcher>
    </div>
    <Link to="/productlist">
    <MainICC/>
    </Link>

    <Link to="/productlist">
    <div style={{width:"100%", backgroundColor:"black", paddingBottom:"40px"}}>
      <img style={{width:"100%"}} src='https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/banner%2FSquare%20pictures%2FONLY%20ON.png?alt=media&token=c59e8da6-e203-4905-bbdf-fe38694bbdac&_gl=1*xxzltn*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5NjI1NTM4Ni4zMC4xLjE2OTYyNTUzOTguNDguMC4w'/>
      <CardSwitcher center={true} slideWidth={0.33*window.innerWidth} aboveShift={"23vw"}>
          {simpleImageSwitcher?.map((el, index) => <SimpleImageTextCard key={index} {...el}/>)}
      </CardSwitcher>
    </div>
    </Link>

    <div>
      <img src='https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg' alt='horizontal banner'/>
    </div>
    <div>
      <img src='https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg' alt='horizontal banner'/>
    </div>
    <Footer/>
    </DIV>
  )
}

export default WOLoginHome

const HEADDIV = styled.div`
  padding: 40px 0 40px 5%;
  color: var(--heading);
  font-family: var(--primary-font-family);
`

const TRPDIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div{
    border: 2px solid;
    border-color: ${(props) => (props.color?"#ef1b22": "#3e4152;")};
    padding: 1.5rem 5rem;
  }
`

const DIV = styled.div`
  display: flex;
  flex-direction: column;
`

const GIFDIV = styled.div`
  width: 100%;
  height: 200px;
  background-image: url("https://i.gifer.com/LSsT.gif");
  font-family: var(--primary-font-family);
  color: white;
`


