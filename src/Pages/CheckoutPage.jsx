import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProducts } from '../Redux/productReducer/action';
import styled from 'styled-components';
import { Footer } from '../Components/Footer/Footer';

function CheckoutPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { products, isLoading } = useSelector((store) => ({
    products: store.productReducer.products,
    isLoading: store.productReducer.isLoading,
  }));
  const [product, setProduct] = useState({});
  const [address, setAddress] = useState({
    name: '',
    street: '',
    city: '',
    postalCode: '',
  });
  const [isAddressSaved, setIsAddressSaved] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    dispatch(getProducts());
    const selectedProduct = products.find((ele) => ele.id === +id);
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [dispatch, id, products]);

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSaveAddress = (e) => {
    e.preventDefault();
    setIsAddressSaved(true);
  };

  const handleCouponChange = (e) => {
    setCouponCode(e.target.value);
  };

  const applyCoupon = () => {
    if (couponCode === 'save25') {
      // Apply a 25% discount
      const discountAmount = (product.price * 25) / 100;
      setDiscount(discountAmount);
    }
  };

  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '35px', width: '75%' }}>
        <Section>
          <h3 style={{ fontSize: 'large', fontWeight: 'bold', paddingBottom: '15px' }}>Review Items and Shipping</h3>
          <ProductInfo>
            <img src={product.image} alt="Product" />
            <div>
              <h2 style={{ fontSize: 'large', fontWeight: '600', paddingBottom: '15px' }}>{product.title}</h2>
              <p style={{ fontSize: 'large', fontWeight: '300', paddingBottom: '15px' }}>Category: {product.category}</p>
            </div>
            <div>
              <p style={{ fontSize: 'large', fontWeight: '600', paddingBottom: '15px' }}>Price: ${product.price}</p>
              <p style={{ fontSize: 'large', fontWeight: '300', paddingBottom: '15px' }}>Quantity: 1</p>
            </div>
          </ProductInfo>
        </Section>
        <Section>
          {!isAddressSaved ? (
            <AddressForm>
              <h3 style={{ fontSize: 'large', fontWeight: 'bold', paddingBottom: '15px' }}>Shipping Address</h3>
              <form onSubmit={handleSaveAddress}>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  name="name"
                  value={address.name}
                  onChange={handleAddressChange}
                />
                <input
                  type="text"
                  id="street"
                  placeholder="Street"
                  name="street"
                  value={address.street}
                  onChange={handleAddressChange}
                />
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  name="city"
                  value={address.city}
                  onChange={handleAddressChange}
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  id="postalCode"
                  name="postalCode"
                  value={address.postalCode}
                  onChange={handleAddressChange}
                />
                <button type="submit">Save Address</button>
              </form>
            </AddressForm>
          ) : (
            <AddressSummary>
              <h2>Shipping Address</h2>
              <p>Name: {address.name}</p>
              <p>Street: {address.street}</p>
              <p>City: {address.city}</p>
              <p>Postal Code: {address.postalCode}</p>
            </AddressSummary>
          )}
        </Section>
      </div>
      <Section style={{ width: '25%' }}>
        <Summary>
          <h3 style={{ fontSize: 'large', fontWeight: 'bold' }}>Order Summary</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p style={{ fontSize: 'large', fontWeight: '400' }}>Price:</p>
            <p style={{ fontSize: 'large', fontWeight: '400' }}>{product.price}</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p style={{ fontSize: 'large', fontWeight: '400' }}>Quantity:</p>
            <p style={{ fontSize: 'large', fontWeight: '400' }}>1</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p style={{ fontSize: 'large', fontWeight: '400' }}>Discount:</p>
            <p style={{ fontSize: 'large', fontWeight: '400' }}>{discount}</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p style={{ fontSize: 'large', fontWeight: '400' }}>Total:</p>
            <p style={{ fontSize: 'large', fontWeight: '400' }}>
              {product.price - discount}
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p style={{ fontSize: 'large', fontWeight: '400' }}>Coupon:</p>
            <div>
              <input
                type="text"
                style={{ border: '1px solid black', borderRadius: '5px' }}
                value={couponCode}
                onChange={handleCouponChange}
              />
              <button
                style={{
                  backgroundColor: '#00cc44',
                  color: 'white',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  cursor:'pointer'
                }}
                onClick={applyCoupon}
              >
                Apply
              </button>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', margin: '20px' }}>
            <Link
              to={`/product_details/${id}/checkout/payment`}
              style={{
                backgroundColor: '#00cc44',
                color: 'white',
                padding: '5px 30px',
                borderRadius: '5px',
              }}
            >
              Proceed to Payment
            </Link>
          </div>
        </Summary>
      </Section>
      <Footer/>
    </Container>
  );
}

export default CheckoutPage;

const Container = styled.div`
  display: flex;
  gap: 35px;
  margin: 35px;
`;

const Section = styled.div`
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 20px;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    max-width: 250px;
    border-radius: 5%;
  }
`;

const Actions = styled.div`
  text-align: center;
  button {
    margin: 10px;
    padding: 10px 20px;
  }
`;

const AddressForm = styled.div`
  form {
    
    display:flex;
    flex-direction:column;
    align-items:center;
    input {
        width:60%;
        border: 1px solid black;
        margin-bottom: 15px;
        padding: 5px;
    }
    button {
      background-color: #00cc44;
      color: white;
      padding: 10px 15px;
      border: none;
      cursor: pointer;
    }
  }
`;

const AddressSummary = styled.div`
  margin-top: 20px;
`;

const Summary = styled.div`
  h2 {
    margin-bottom: 15px;
  }
  p {
    margin: 5px 0;
  }
  input {
    width: 100px;
  }
`;

const StyledLink = styled.a`
  color: #00cc44;
  cursor: pointer;
`;
