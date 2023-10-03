import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

function MetadataICC({title, description}) {
  return (
    <DIV>
        <Heading as="h5" fontSize={"1.5rem"} letterSpacing={3}>{title}</Heading>
        <LINE></LINE>
        <Text>{description}</Text>
    </DIV>
  )
}

export default MetadataICC

const DIV = styled.div`
    text-align: left;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const LINE = styled.div`
    height: 3px;
    width: 45px;
    background-color: var(--primary1);
`