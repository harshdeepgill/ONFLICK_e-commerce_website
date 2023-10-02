import React from 'react'
import StarRating from './StarRating'
import styled from 'styled-components'
import {Link } from "react-router-dom";
function ProductCart({id, image, title, price, category, rating, numVotes}) {
  return (
    <>
        <div style={{minWidth:"300px", backgroundColor:'#f2f2f2', borderRadius:'25px'}}>
    <Link to={`/product_details/${id}`}>
        <IMG src={image} alt='Image Not Found'/>
        <div style={{display:'flex', justifyContent:'space-between', padding:'10px'}}>
            <p style={{fontSize:'large', fontWeight:'bold'}}>{title}</p>
            <p style={{fontSize:'large', fontWeight:'bold'}}>{price}</p>
        </div>
        <p style={{marginLeft:'10px'}}>Category: {category}</p>
        <div style={{padding:'10px', display:'flex', gap:'10px'}} className='rating'>
            <StarRating rating={rating} />
            <p>({numVotes})</p>
        </div>
    </Link>
        <div  style={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'15px'}}>
        <Link to={`/product_details/${id}`}>
            <button style={{backgroundColor:'#00cc44', color:'white', padding:'5px 25px', borderRadius:'25px'}}>Add to cart</button>
            </Link>
        </div>
    </div>
    </>
  )
}

export default ProductCart

const IMG = styled.img`
  object-fit: cover;
  width: 100%;
  height: 250px;
  border-radius: 5% 5% 0 0;
`
