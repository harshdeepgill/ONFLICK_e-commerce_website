import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React, { useRef } from 'react'
// import { FontAwesomeIcon } from '@fortawsom'

const NavSearchCard = ({fullStar, halfStar, emptyStar, title, image}) => {
    const fs = useRef(new Array(fullStar).fill(1))
    const hs = useRef(new Array(halfStar).fill(1))
    const es = useRef(new Array(emptyStar).fill(1))
  return (
    <div>
        <Flex>
            <Box w={"30px"} h={"30px"}><Image src={image}/></Box>
            <Heading as='h6' size='xs'>{title}</Heading>
            <Flex>
                {/* {fs.current?.map((el,index)=> <FontAwesomeIcon icon="fa-solid fa-star" />)}
                {hs.current?.map((el,index)=> <FontAwesomeIcon icon="fa-solid fa-star-half-stroke" />)}
                {es.current?.map((el,index)=> <FontAwesomeIcon icon="fa-regular fa-star" />)} */}
            </Flex>
        </Flex>
    </div>
  )
}

export default NavSearchCard