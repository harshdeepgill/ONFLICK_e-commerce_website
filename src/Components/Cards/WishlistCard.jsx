import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { addCart } from '../../Redux/AuthReducer/action'

const WishlistCard = ({title, image, price, rating,id,category, numVotes, fullStar, halfStar, emptyStar}) => {
    const fs = useRef(new Array(fullStar).fill(Math.random()));
    const hs = useRef(new Array(halfStar).fill(Math.random()));
    const es = useRef(new Array(emptyStar).fill(Math.random()));

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [cartStatus, setCartStatus] = useState(false);


    const {isAuth,wishlist,idUser,cart} = useSelector((store) => {
        return {
          isAuth: store.authReducer.isAuth,
          idUser: store.authReducer.id,
          cart: store.authReducer.cart,
        }
      });

    const handleaAddToCart = () => {
        if(!isAuth){
            navigate("/login");
          }else{
            let newCart = [...cart];
            let bool = false;
            newCart.forEach((el) => {
              if(el.id == id){
                bool = true
              }
            })
            if(bool){
              newCart = newCart.filter((el) => el.id!=id);
            setCartStatus(true);
            }else{
              newCart = [...cart, {id, image, title, category, rating, numVotes,price}];
              setCartStatus(false);
            }
            dispatch(addCart(idUser, newCart))
          }
    }
  return (
    <DIV>
        <div className='image-div'>
            <img src={image}/>
        </div>
        <div className='right-div'>
            <div className='top-div'>
                <Heading textOverflow={"ellipsis"} w={"20vw"} as={"h4"} size="md">{title}</Heading>
                <Flex color={"var(--primary2)"}>
                    {fs.current?.map((el,index)=> <FontAwesomeIcon fontSize={"0.8rem"} key={el} icon={faStar} />)}
                    {hs.current?.map((el,index)=> <FontAwesomeIcon fontSize={"0.8rem"} key={el} icon={faStarHalfStroke} />)}
                    {es.current?.map((el,index)=> <FontAwesomeIcon fontSize={"0.8rem"} key={el} icon="fa-regular fa-star" />)}
                </Flex>
            </div>
            <div className='below-div'>
                <Heading as={"h4"} size="sm">${price}</Heading>
                <Button onClick={handleaAddToCart} _hover={cartStatus?{backgroundColor:"var(--primary1)",color:"white"}:{backgroundColor:"black",color:"white"}} size='sm' variant={"outline"} borderRadius={0} colorScheme='black'>{cartStatus?"ROMOVE":"ADD TO CART"}</Button>
            </div>
        </div>
    </DIV>
  )
}

export default WishlistCard

const DIV = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
    width: 35vw;

    .image-div{
        width: 5vw;
        height: 5vw;
        img{
            width: 100%;
            height: 5vw;
            object-fit: cover;
        }
    }
    .right-div{
        width: 27vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .top-div{
            display: flex;
            justify-content: space-between;
        }
        .below-div{
            display:flex;
            justify-content: space-between;
        }
    }

`