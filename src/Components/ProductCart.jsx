import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Flex } from '@chakra-ui/react';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addWish } from '../Redux/AuthReducer/action';

function ProductCart({id, image, title, price, category, rating, numVotes, fullStar, halfStar, emptyStar}) {
  const fs = useRef(new Array(fullStar).fill(Math.random()));
  const hs = useRef(new Array(halfStar).fill(Math.random()));
  const es = useRef(new Array(emptyStar).fill(Math.random()));

  const [includesWishlist, setIncludesWishlist] = useState(false);

  const {isAuth,wishlist,idUser} = useSelector((store) => {
    return {
      isAuth: store.authReducer.isAuth,
      wishlist: store.authReducer.wishlist,
      idUser: store.authReducer.id
    }
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToWishlist = () =>{
    if(!isAuth){
      navigate("/login");
    }else{
      let newWishlist = [...wishlist];
      let bool = false;
      newWishlist.forEach((el) => {
        if(el.id == id){
          bool = true
        }
      })
      if(bool){
        newWishlist = newWishlist.filter((el) => el.id!=id)
      }else{
        newWishlist = [...wishlist, {id, image, title, category, rating, numVotes,price}];
      }
      dispatch(addWish(idUser, newWishlist))
    }
  }
  const onStyle = {
    backgroundColor: "black",
    color: "white"
  }

  const offStyle = {
    backgroundColor: "white",
    color: "black"
  }

  useEffect(()=>{
    wishlist.forEach((el) => {
      if(el.id == id){
        setIncludesWishlist(true);
      }
    })
  },[wishlist])

  return (
    <>
        <MAINDIV >
    <Link to={`/product_details/${id}`}>
        <IMG src={image} alt='Image Not Found'/>
        <METADATA>
        <div className='title-cat'>
          <h3>{title}</h3>
          <h4>{category}</h4>
        </div>
        <div className='price'><span>${price}</span></div>
          <div className='rating'>
          <Flex color={"var(--primary2)"}>
                  {fs.current?.map((el,index)=> <FontAwesomeIcon fontSize={"0.8rem"} key={el} icon={faStar} />)}
                  {hs.current?.map((el,index)=> <FontAwesomeIcon fontSize={"0.8rem"} key={el} icon={faStarHalfStroke} />)}
                  {es.current?.map((el,index)=> <FontAwesomeIcon fontSize={"0.8rem"} key={el} icon="fa-regular fa-star" />)}
              </Flex>
              <p>({numVotes})</p>
          </div>
        </METADATA>
    </Link>
        <Button w={"100%"} bg={"white"} color={"black"} variant={"outline"} colorScheme='black' borderRadius={0} _hover={{backgroundColor:"black", color:"white"}} leftIcon={<HiOutlineShoppingBag style={{fontSize:"1.3rem"}}/>}>ADD TO CART</Button>
    <HEART style={includesWishlist?onStyle:offStyle} onClick={addToWishlist}>
      <FaRegHeart style={{fontSize:"1.2em"}} />
    </HEART>
    </MAINDIV>
    </>
  )
}
export default ProductCart

const IMG = styled.img`
  object-fit: cover;
  width: 100%;
  height: 280px;
  display: block;
`
const HEART = styled.div`
  position: absolute;
  height: 35px;
  width: 35px;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:hover{
    color: white;
    background-color: black;
    cursor: pointer;
  }
`

const METADATA = styled.div`
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .title-cat{
    h3{
      font-size: 17px;
      font-weight: 700;
      line-height: 1;
      color: #282c3f;
      margin-bottom: 6px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  
    h4{
      color: #535766;
      font-size: 14px;
      line-height: 1;
      margin-bottom: 0;
      margin-top: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 400;
      display: block;
    }
  }
  .price{
    font-size: 14px;
    font-weight: 700;
    color: #282c3f;
  }
  .rating{
    display: flex;
    align-items: center;
    gap: 7px;
    p{
      font-size: 0.8rem;
    }
  }
`

const MAINDIV = styled.div`
  max-width: 210px;
  text-align: left;
    position: relative;
    vertical-align: top;
    overflow: hidden;
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 10px 30px;

  &:hover{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`

    

