import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const CardSwitcher = ({children, slideWidth, left = false, right = false,center = false }) => {
  const slider = useRef();
  const [position, setPosition] = useState(0);
  const [forwardState, setForwardState] = useState(true)


  const handleLeft = ()=>{
    slider.current.scrollLeft -= slideWidth;
    if(slider.current.scrollLeft < slider.current.scrollWidth - window.innerWidth){
      setForwardState(true)
    } 
    setPosition(prev => prev-1)
  }

  const handleRight = () =>{
    slider.current.scrollLeft += slideWidth; 
    if(slider.current.scrollLeft >=slider.current.scrollWidth - window.innerWidth){
      setForwardState(false)
    }
    setPosition(prev => prev+1)
  }



  return (
    <div style={{position: "relative"}}>
      <DIV left={left} right={right} center={center} ref={slider} id='slider'>
        {children}
        
      </DIV>
      <DIV2>
          <DIV3>
            <BDIV leftS={position} onClick={handleLeft}><ChevronLeftIcon boxSize={10} color={"#696b70"}/></BDIV>
            <FDIV leftS={forwardState} onClick={handleRight}><ChevronRightIcon boxSize={10} color={"#696b70"}/></FDIV>
          </DIV3>
        </DIV2>
    </div>
  )
}



export default CardSwitcher

const DIV = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: hidden;
  scroll-behavior: smooth;
  width: 95%;
  margin: ${(props) => {
    if(props.left){
      return "0 0 0 auto"
    }else if(props.right){
      return "0 auto 0 0"
    }else if(props.center){
      return "auto"
    }
  }};
`

const DIV2 = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 0;

`
const DIV3 = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;


  div{
    height: 60px;
    width: 60px;
    border-radius: 50%;
    box-shadow: 2px 3px 5px #888888;
    background-color: white;
    display: flex;
    align-items: center;
  }
`
const BDIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props)=> (props.leftS == 0? "hidden":"visible")};
`
const FDIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props)=> (props.leftS? "visible":"hidden")};
`