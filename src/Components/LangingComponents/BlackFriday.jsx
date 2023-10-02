import { Heading, Text, useStatStyles } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const BlackFriday = () => {

    const [num, setNumber] = useState(76294);
    const [secNum, setSecNum] = useState(2506);

    useEffect(() => {
        let intervalId = setInterval(()=> {
            setSecNum((secprev) => {
                setNumber((prev) => {
                    if(secprev<150 ){
                        clearInterval(intervalId);
                        return prev
                    }else{
                        return prev + secprev
                    }
                })
                return secprev-84
            })
        },100)


    },[])

  return (
    <DIV>
        <LILDIV>
            <Heading>HAPPY COUSTOMERS</Heading>
            <Text>Growing Everyday!</Text>
        </LILDIV>
        <LILDIV>
                <Heading color="var(--primary2)">{num}</Heading>
        </LILDIV>
    </DIV>
  )
}

export default BlackFriday

const DIV = styled.div`
    height: 110px;
    width: 100%;
    background-color: black;
    display: flex;


`

const LILDIV = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
`