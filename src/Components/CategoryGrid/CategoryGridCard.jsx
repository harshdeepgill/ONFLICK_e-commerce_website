import { Heading } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

const CategoryGridCard = ({text, image}) => {
  return (
    <DIV image={image}>
      <IMG src={image}/>
        <P>
          <Heading as="h5" size="s">{text}</Heading>
        </P>
    </DIV>
  )
}

export default CategoryGridCard

const IMG = styled.img`
  height: 100%;
  object-fit: cover;
  transition: transform .5s ease;
`

const DIV = styled.div`
    border-radius: 1%;
    height: 200px;
    width: 150px;
    position: relative;
    overflow: hidden;

    img:hover{
      transform: scale(1.2);
    }
`

const P = styled.p`
    position: absolute;
    color: white;
    width: 100%;
    top: 5%;
    text-align: center;
`