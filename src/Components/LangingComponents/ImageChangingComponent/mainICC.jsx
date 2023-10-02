import React, { useEffect, useState } from 'react'
import MetadataICC from './metadataICC'
import styled from 'styled-components';

const imgArr = [
    "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/banner%2FSquare%20pictures%2FStory%20slides%202.jpg?alt=media&token=5ac0f582-6dc5-429b-b2ea-3b39d84e9dc6&_gl=1*q5hsuw*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5NjI1MTUwMS4yOS4xLjE2OTYyNTE2MDUuMzEuMC4w",
    "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/banner%2FSquare%20pictures%2FStory%20slides%203.jpg?alt=media&token=d9ab83cd-5627-4e6a-92d6-9a6441c83d95&_gl=1*1042wx5*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5NjI1MTUwMS4yOS4xLjE2OTYyNTE2MjcuOS4wLjA.",
    "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/banner%2FSquare%20pictures%2FStory%20slides%204.jpg?alt=media&token=41844d3a-ada8-4d69-ba98-a7b3de664b0a&_gl=1*wk7da9*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5NjI1MTUwMS4yOS4xLjE2OTYyNTE2NDAuNjAuMC4w",
    "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/banner%2FSquare%20pictures%2FStory%20slides%206.jpg?alt=media&token=53af4b08-6208-46a3-be6f-979298eb1c74&_gl=1*7wmhxj*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5NjI1MTUwMS4yOS4xLjE2OTYyNTE2NTcuNDMuMC4w",
    "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/banner%2FSquare%20pictures%2FStory%20slides%205.jpg?alt=media&token=936a5920-c83e-4946-b696-7fbda912fba1&_gl=1*kl14w8*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5NjI1MTUwMS4yOS4xLjE2OTYyNTE2NzEuMjkuMC4w"
]

function MainICC() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let intervalId = setInterval(()=>{
            setIndex((prev) => {
                let newIndex;
                if(prev>=imgArr.length-1){
                    newIndex = 0
                }else{
                    newIndex = prev +1;
                }
                return newIndex
            })
        },2000)

        return () => {
            clearInterval(intervalId);
        }
    }, [])


  return (
    <DIV>
        <div className='v254'>
       
            <IMG src='https://images.bewakoof.com/uploads/grid/app/1x1-Sweatshirts-C-1695995227.jpg'/>
         
            <MetadataICC title={"VACATION MODE"} description={"Set the seal on the holiday essentials that check all the boxes"}/>
        </div>
        <div className='v254'>
       
            <IMG src={imgArr[index]}/>
            
            <MetadataICC title={"THE PARTY STARTERS"} description={"Set the seal on the holiday essentials that check all the boxes"}/>
        </div>
        <div  className='v254'>
          
            <IMG src='https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-OversiedGraphicPrintedTees-common-outdoor--2--1695995648.jpg'/>
        
            <MetadataICC title={"GIFTING"} description={"Set the seal on the holiday essentials that check all the boxes"}/>
        </div>
    </DIV>
  )
}

export default MainICC

const DIV = styled.div`
    display: grid;
    grid-template-columns: repeat(3,32%);
    justify-content: space-between;
    padding: 30px 4%;

    .v254{
        display: flex;
        flex-direction: column;
    }
`

const IMG = styled.img`
    width: 100%;
    height: 350px;
    object-fit: cover;
`