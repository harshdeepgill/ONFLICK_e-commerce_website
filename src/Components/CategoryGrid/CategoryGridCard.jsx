import React from 'react'
import styled from 'styled-components'

const CategoryGridCard = ({text, image}) => {
  return (
    <DIV image>
        <p>{text}</p>
    </DIV>
  )
}

export default CategoryGridCard

const DIV = styled.div`
    background-image: url(${props=>props.image});
    background-position: center;
    background-size: cover;
    border-radius: 5%;
    height: 400px;
    width: 300px;
`

const P = styled.p`
    position: absolute;
    top: 5%;
    text-align: center;
`