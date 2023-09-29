import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const CardSwitcher = ({children, minWidth, }) => {
  const slider = useRef();
  const [position, setPosition] = useState(0);
  const [forwardState, setForwardState] = useState(true)


  const handleLeft = ()=>{
    slider.current.scrollLeft -= minWidth;
    if(slider.current.scrollLeft < slider.current.scrollWidth - window.innerWidth){
      setForwardState(true)
    } 
    setPosition(prev => prev-1)
  }

  const handleRight = () =>{
    slider.current.scrollLeft += minWidth; 
    if(slider.current.scrollLeft >=slider.current.scrollWidth - window.innerWidth){
      setForwardState(false)
    }
    setPosition(prev => prev+1)
  }



  return (
    <div style={{position: "relative"}}>
      <DIV ref={slider} id='slider'>
        {children}
        <DIV2>
          <BDIV leftS={position} onClick={handleLeft}><ChevronLeftIcon boxSize={10} color={"white"}/></BDIV>
          <FDIV leftS={forwardState} onClick={handleRight}><ChevronRightIcon boxSize={10} color={"white"}/></FDIV>
        </DIV2>
      </DIV>
    </div>
  )
}



export default CardSwitcher

const DIV = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: hidden;
  scroll-behavior: smooth;
`

const DIV2 = styled.div`
  border: 2px solid red;
  width: 95%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;


  div{
    height: 60px;
    width: 60px;
    border-radius: 50%;
    box-shadow: 2px 3px #888888;
    background-color: white;
    display: flex;
    align-items: center;
  }
`
const BDIV = styled.div`

  visibility: ${(props)=> (props.leftS == 0? "hidden":"visible")};
`
const FDIV = styled.div`
  visibility: ${(props)=> (props.leftS? "visible":"hidden")};
`