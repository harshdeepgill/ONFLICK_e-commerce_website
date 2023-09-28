import { Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'

const NavCatCard = ({imageUrl, text}) => {
  return (
    <Flex>
        <Image w={"60px"} src={imageUrl}/>
        <Flex w={"150px"} h={"60px"} justifyContent={"center"} alignItems={"center"}>
            <Heading as='h5' size='sm'>{text}</Heading>
        </Flex>
    </Flex>
  ) 
}

export default NavCatCard