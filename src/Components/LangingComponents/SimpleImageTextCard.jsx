import { Text } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

function SimpleImageTextCard({image, text}) {
  return (
    <DIV>
        <IMG src={image}/>
        <Text color={"white"} fontSize={"1.5rem"} >{text}</Text>
    </DIV>
  )
}

export default SimpleImageTextCard

const DIV = styled.div`
    display: flex;
    min-width: 33vw;
    flex-direction: column;
    gap: 40px;
    text-align: center;
`

const IMG = styled.img`
    width: 100%;
    height: 40vw;
    object-fit: cover;
`