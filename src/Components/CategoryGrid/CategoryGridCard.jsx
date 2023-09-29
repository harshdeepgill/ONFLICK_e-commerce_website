import { Heading } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

const CategoryGridCard = ({text, image}) => {
  return (
    <DIV image={image}>
        <P>
          <Heading as="h5" size="s">{text}</Heading>
        </P>
    </DIV>
  )
}

export default CategoryGridCard

const DIV = styled.div`
    background-image: url(${props=>props.image});
    background-position: center;
    background-size: cover;
    border-radius: 5%;
    height: 200px;
    width: 150px;
    position: relative;
`

const P = styled.p`
    position: absolute;
    color: white;
    width: 100%;
    top: 5%;
    text-align: center;
`