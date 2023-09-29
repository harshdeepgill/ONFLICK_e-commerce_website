import { Heading } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

const SimpleTextCard = ({text}) => {
  return (
    <div>
        <DIV>
          <Heading>{text}</Heading>
        </DIV>
    </div>
  )
}

export default SimpleTextCard

const DIV = styled.div`
    min-width: 250px;
    min-height: 150px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    border: 2px solid;
    border-color: black;
    padding: 0 0.7rem;
`