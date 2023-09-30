import React from 'react'
import styled from 'styled-components'

const Logo = ({size}) => {
  return (
    <DIV size={size}>
        <span>ON</span>
        FLICK
    </DIV>
  )
}

export default Logo

const DIV = styled.div`
    display: inline-block;
    font-size: ${(props) => (props.size)};
    font-family: var(--logo-font-family);
    font-weight: 200;

    span{
        font-weight: 500;
    }

`