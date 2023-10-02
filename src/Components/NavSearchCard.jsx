import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const NavSearchCard = ({fullStar, halfStar, emptyStar,id, title, image, price}) => {
    const fs = useRef(new Array(fullStar).fill(Math.random()))
    const hs = useRef(new Array(halfStar).fill(Math.random()))
    const es = useRef(new Array(emptyStar).fill(Math.random()))

    console.log(title, fs.current, hs.current, es.current);
  return (
    <Link to={`/product_details/${id}`}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Box w={"40px"} h={"40px"}><Image objectFit={"cover"} w={"100%"} h={"40px"} src={image}/></Box>
            <Heading as='h6' size='xs'>{title}</Heading>
            <Flex color={"var(--primary2)"}>
                {fs.current?.map((el,index)=> <FontAwesomeIcon key={el} icon={faStar} />)}
                {hs.current?.map((el,index)=> <FontAwesomeIcon key={el} icon={faStarHalfStroke} />)}
                {es.current?.map((el,index)=> <FontAwesomeIcon key={el} icon="fa-regular fa-star" />)}
            </Flex>
            <Heading as={"h6"} size={"xs"}>${price}</Heading>
        </Flex>
    </Link >
  )
}

export default NavSearchCard