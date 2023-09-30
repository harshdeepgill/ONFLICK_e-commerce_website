import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/productReducer/action";
import styled from "styled-components";
// import StarRating from "../Components/StarRating";
import ProductCart from "../Components/ProductCart";



export const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productReducer.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
    setCurrentPage(1); 
  }, [products, selectedCategory]);

  
  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredProducts.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Sidebar>
          <FilterTitle>Filters</FilterTitle>
          <FilterOption onClick={() => handleFilter("All")}>
            All Products
          </FilterOption>
          <FilterOption onClick={() => handleFilter("Furniture")}>
            Furniture
          </FilterOption>
          <FilterOption onClick={() => handleFilter("Headphones")}>
            Headphones
          </FilterOption>
          <FilterOption onClick={() => handleFilter("Shoes")}>
            Shoes
          </FilterOption>
          <FilterOption onClick={() => handleFilter("Bags")}>Bags</FilterOption>
          <FilterOption onClick={() => handleFilter("Laptops")}>
            Laptops
          </FilterOption>
          <FilterOption onClick={() => handleFilter("Books")}>
            Books
          </FilterOption>
        </Sidebar>

        <ProductListContainer>
          {paginatedProducts.map((el) => (
            <ProductCart {...el}/>
          ))}
        </ProductListContainer>
      </div>
      <div>
        <PaginationControls>
          <button onClick={prevPage} disabled={currentPage === 1}>
            Previous Page
          </button>
          <span>Page {currentPage}</span>
          <button
            onClick={nextPage}
            disabled={
              currentPage === Math.ceil(filteredProducts.length / itemsPerPage)
            }
          >
            Next Page
          </button>
        </PaginationControls>
      </div>
    </div>
  );
};
const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;




const Sidebar = styled.div`
  width: 250px;
  background-color: #e2e2e2;
  padding: 10px;
  border-radius: 10px;
`;

const FilterTitle = styled.p`
  font-weight: bold;
`;

const FilterOption = styled.div`
  margin-top: 10px;
  cursor: pointer;
`;
const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    margin: 0 10px;
    padding: 5px 10px;
    background-color: #00cc44;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

{/* <ProductCardContainer key={el.id}>
              <ProductImage src={el.image} alt="Product" />
              <ProductTitle>{el.title}</ProductTitle>
              <ProductPrice>${el.price}</ProductPrice>
              <ProductCategory>Category: {el.category}</ProductCategory>
              <RatingContainer>
                <StarRating rating={el.rating} />
                <p>({el.numVotes})</p>
              </RatingContainer>
              <ProductDescription>{el.description}</ProductDescription>
              <AddToCartButton>Add to cart</AddToCartButton>
            </ProductCardContainer> */}
            // const ProductCardContainer = styled.div`
//   width: 300px;
//   background-color: #f2f2f2;
//   border-radius: 25px;
//   margin: 10px;
//   padding: 10px;
//   box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
// `;

// const ProductImage = styled.img`
//   width: 100%;
//   height: 250px;
//   object-fit: cover;
// `;

// const ProductTitle = styled.p`
//   font-size: large;
//   font-weight: bold;
// `;

// const ProductPrice = styled.p`
//   font-size: large;
//   font-weight: bold;
// `;

// const ProductCategory = styled.p`
//   margin-left: 10px;
// `;

// const RatingContainer = styled.div`
//   padding: 10px;
//   display: flex;
//   gap: 10px;
//   align-items: center;
// `;

// const AddToCartButton = styled.button`
//   background-color: #00cc44;
//   color: white;
//   padding: 5px 25px;
//   border-radius: 25px;
// `;

// const ProductDescription = styled.p`
//   margin-top: 10px;
// `;