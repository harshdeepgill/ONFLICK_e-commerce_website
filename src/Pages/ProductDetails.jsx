import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProducts } from '../Redux/productReducer/action';
import styled from 'styled-components';
import StarRating from '../Components/StarRating'; // Import the StarRating component
import ProductCart from '../Components/ProductCart';
import { addToCart } from '../Redux/cartReducer/action';
import { Footer } from '../Components/Footer/Footer';

const simlerData = [
    {
        "id": 1,
        "title": "Wooden Dining Table",
        "price": 299.99,
        "category": "Furniture",
        "rating": 4.5,
        "numVotes": 120,
        "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FWooden%20Dining%20Table.jpg?alt=media&token=0b4d7e7f-ca3c-4a2f-a858-c37a6113c653",
        "description": "Elegant dining table for family meals."
      },
      {
        "id": 2,
        "title": "Leather Sofa Set",
        "price": 699.99,
        "category": "Furniture",
        "rating": 4.2,
        "numVotes": 95,
        "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FLeather%20Sofa.jpg?alt=media&token=23982c30-dc93-4536-99f5-8fdce276de57",
        "description": "Luxurious leather sofa set for your living room."
      },
      {
        "id": 3,
        "title": "Bookshelf",
        "price": 149.99,
        "category": "Furniture",
        "rating": 4.8,
        "numVotes": 210,
        "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FBookshelf.jpg?alt=media&token=2468f964-5185-4f08-9f34-8bd4be971ebc",
        "description": "Sturdy bookshelf for organizing your books."
      },
      {
        "id": 4,
        "title": "Bed Frame",
        "price": 249.99,
        "category": "Furniture",
        "rating": 4.6,
        "numVotes": 150,
        "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FBed%20frome.jpg?alt=media&token=c9a7a1f5-8572-49ff-9603-bc2c748059c3",
        "description": "Comfortable bed frame for a good night's sleep."
      },
      {
        "id": 5,
        "title": "Leather Sofa Set",
        "price": 699.99,
        "category": "Furniture",
        "rating": 4.2,
        "numVotes": 95,
        "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FLeather%20Sofa.jpg?alt=media&token=23982c30-dc93-4536-99f5-8fdce276de57",
        "description": "Luxurious leather sofa set for your living room."
      }
]
function ProductDetails() {
  const [quant, setQuant] = useState(1)
  const dispatch = useDispatch();
  const { id } = useParams();
  const { products, isLoading } = useSelector((store) => ({
    products: store.productReducer.products,
    isLoading: store.productReducer.isLoading,
  }));
  const [product, setProduct] = useState({});

  const handleAddToCart = () =>{
    dispatch(addToCart(product));
  }
  useEffect(() => {
    dispatch(getProducts());
    const selectedProduct = products.find((ele) => ele.id === +id);
    setProduct(selectedProduct);
  }, [dispatch, id, products]);
  //console.log(product)
  return (
    <div>
      {product ? (
        <MainDiv>
          <div className='firstSection'>
            <div className='imageDiv'>
              <img src={product.image} alt="image not found" />
            </div>
            <div className='titleDiv'>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <div className='rating'>
                    <StarRating rating={product.rating} />
                    <p>({product.numVotes})</p>
                </div>
                <hr/>
                <h3>Price: {product.price} or 99.99/month</h3>
                <p>Suggested payments with 6 months special financing</p>
                <hr/>
                <div>
                    <div style={{display:'flex', gap:'15px', alignItems:'center', marginBottom:'25px'}}>
                        <div style={{display:'flex', gap:'25px', backgroundColor:'#f2f2f2', padding:'10px', borderRadius:'35px', marginRight:'15px'}}>
                            <p onClick={() => quant > 1 && setQuant(quant - 1)} style={{cursor:'pointer'}}>-</p>
                            <p>{quant}</p>
                            <p onClick={() => setQuant(quant + 1)} style={{cursor:'pointer'}}>+</p>
                        </div>
                        <p>Only <span style={{color:'#ffbb33'}}>12 Items</span> Left!<br/> Don't miss it</p>
                    </div>
                    <div style={{display:'flex', gap:'15px', alignItems:'center'}}>
                    <Link to={`/product_details/${id}/checkout`} style={{ backgroundColor: '#00cc44', color: 'white', padding: '10px 35px', borderRadius: '35px' }}>Buy Now</Link>
                        <button onClick={handleAddToCart} style={{backgroundColor:'white', color:'#00cc44', padding:'10px 35px', borderRadius:'35px', border:'1px solid #00cc44'}}>Add to Cart</button>
                    </div>
                </div>
            </div>
          </div>
          <div className='secondSection'>
            <div className='free'>
                <h5>Free Delivery</h5>
                <p>Enter your Postal code for Delivery Availabilty</p>
            </div>
            <div className='return'>
                <h5>Return Delivery</h5>
                <p>Free 30days Delivery Returns. <span>Details</span></p>
            </div>
          </div>
          <div className='thirdSection'>
            <h1>{product.title} Full Specifications</h1>
            <p>Title: {product.title}</p>
            <hr />
            <p>Category: {product.category}</p>
            <hr />
            <p>Rating: {product.rating}</p>
            <hr />
            <p>No of Votes: {product.numVotes}</p>
            <hr />
            <p>Price: {product.price}</p>
            <hr />
            <p>Description: {product.description}</p>
          </div>
          <div className='lastSection'>
            <h1>Similar items you Might like</h1>
            <div style={{display:'flex', gap:'25px'}}>
                {simlerData.map((ele)=>(
                    <ProductCart key={ele.id} {...ele}/>
                ))}
            </div>
          </div>

          <Footer/>
        </MainDiv>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default ProductDetails;

const MainDiv = styled.div`
  padding: 35px;
  .firstSection {
    display: flex;
    gap: 35px;
  }
  .imageDiv {
    width: 60%;
  }
  .titleDiv {
    width: 40%;

    h1 {
      font-size: xx-large;
      font-weight: bold;
    }

    .rating {
        display:flex;
        color: skyblue;
        font-size: large;
    }
    hr{
        margin:25px 0
    }
    h3{
        font-size: larger;
        font-weight: bold;
    }
  }
  .secondSection{
        display: flex;
        align-items: center;
        gap: 45px;
        margin: 35px;

        h5{
            font-size: medium;
            font-weight: bold;
        }
        
        /* Add border and shadow to child divs */
        .free, .return {
            border: .5px solid #f1f1f1;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 1px 2px rgba(39, 39, 39, 0.2);
        }
    }
    .free{
            width: 50%;
        }
    .return{
        width: 50%;
    }
    .thirdSection{
        h1 {
            font-size: xx-large;
            font-weight: bold;
        }
        p{
            margin:10px;
            font-size: large;
            font-weight: 600;
        }
    }
    .lastSection{
        margin: 35px, 0;
        h1 {
            font-size: xx-large;
            font-weight: bold;
        }
    }
`;
