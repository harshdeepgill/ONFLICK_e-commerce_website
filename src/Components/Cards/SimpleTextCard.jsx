import { Heading } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

const SimpleTextCard = ({text, size, as, dims,p,OnClick}) => {
  return (
    <div onClick={OnClick}>
        <DIV dims={dims} p={p}>
          <Heading as={as} size={size}>{text}</Heading>
        </DIV>
    </div>
  )
}

export default SimpleTextCard

const DIV = styled.div`
    min-width: ${(props) => (props.dims*5+"px")};
    min-height: ${(props) => (props.dims*3+"px")};
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    border: 2px solid;
    border-color: black;
    padding-left: ${(props) => (props.p)};
    padding-right: ${(props) => (props.p)};

    &:hover{
      border-color: var(--primary1);
      color: var(--primary1);
      cursor: pointer;
    }
`