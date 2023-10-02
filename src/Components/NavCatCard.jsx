import { Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react';
import {Link} from "react-router-dom";

const NavCatCard = ({imageUrl, text}) => {
  return (
    <Link to={`/productlist?category=${text}`}>
      <Flex>
          <Image w={"60px"} src={imageUrl}/>
          <Flex w={"150px"} h={"60px"} justifyContent={"center"} alignItems={"center"}>
              <Heading as='h5' size='sm'>{text}</Heading>
          </Flex>
      </Flex>
    </Link>
  ) 
}

export default NavCatCard