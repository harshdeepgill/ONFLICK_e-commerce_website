import React from 'react'
import StarRating from './StarRating'
function ProductCart({id, image, title, price, category, rating, numVotes}) {
  return (
    <div style={{width:"300px", backgroundColor:'#f2f2f2', borderRadius:'25px'}}>
        <img width={'100%'} height="250px" src={image} alt="image not found"/>
        <div style={{display:'flex', justifyContent:'space-between', padding:'10px'}}>
            <p style={{fontSize:'large', fontWeight:'bold'}}>{title}</p>
            <p style={{fontSize:'large', fontWeight:'bold'}}>{price}</p>
        </div>
        <p style={{marginLeft:'10px'}}>Category: {category}</p>
        <div style={{padding:'10px', display:'flex', gap:'10px'}} className='rating'>
            <StarRating rating={rating} />
            <p>({numVotes})</p>
        </div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'15px'}}>
            <button style={{backgroundColor:'#00cc44', color:'white', padding:'5px 25px', borderRadius:'25px'}}>Add to cart</button>
        </div>
    </div>
  )
}

export default ProductCart
