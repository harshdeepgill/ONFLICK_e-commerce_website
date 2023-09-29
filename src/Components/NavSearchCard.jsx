import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'

const NavSearchCard = ({fullStar, halfStar, emptyStar, title, image}) => {
    const fs = useRef(new Array(fullStar).fill(Math.random()))
    const hs = useRef(new Array(halfStar).fill(Math.random()))
    const es = useRef(new Array(emptyStar).fill(Math.random()))

    console.log(title, fs.current, hs.current, es.current);
  return (
    <div>
        <Flex>
            <Box w={"30px"} h={"30px"}><Image src={image}/></Box>
            <Heading as='h6' size='xs'>{title}</Heading>
            <Flex>
                {fs.current?.map((el,index)=> <FontAwesomeIcon key={el} icon={faStar} />)}
                {hs.current?.map((el,index)=> <FontAwesomeIcon key={el} icon={faStarHalfStroke} />)}
                {es.current?.map((el,index)=> <FontAwesomeIcon key={el} icon="fa-regular fa-star" />)}
            </Flex>
        </Flex>
    </div>
  )
}

export default NavSearchCard