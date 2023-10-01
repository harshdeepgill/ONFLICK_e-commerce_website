import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { categoryData } from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import ProductCart from "../Components/ProductCart";
import { getProducts } from "../Redux/productReducer/action";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { ChevronDownIcon, SmallCloseIcon } from "@chakra-ui/icons";
import InfiniteScroll from 'react-infinite-scroll-component';

const ProductList = () => {
  const [maxPrice, setMaxPrice] = useState(1000);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const products = useSelector(store => store.productReducer.products);
  const dispatch = useDispatch();
  
  const [category, setCategory] =  useState( searchParams.getAll("category") || []);
  const [order, setOrder] = useState(searchParams.get("order") || "");
  const [sort, setSort] = useState(searchParams.get("sort") || "");

  const [paging, setPaging] = useState(2);



  useEffect(() => {
    setPaging(2);
    let parameter;
    if(sort != ""){
      setSearchParams({category, order,sort})
      parameter = {
        category,
        _order: order,
        _sort: sort,
        _limit:6,
        _page:1
      }
    }else{
      setSearchParams({category})
      parameter = {
        category,
        _limit: 6,
        _page:1

      }
    }
    dispatch(getProducts(parameter));
  },[category, order, sort])


  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setCategory(
      isChecked
        ? [...category, value]
        : category.filter((item) => item !== value)
    );
  };

  const handleSort = (e) => {
    const temp = e.target.value;
    const arr = temp.split(",");
    if(arr[0] == "rating"){
      setOrder("desc")
      setSort("rating");
    }else if(arr[0] == "price"){
      setOrder(arr[1]);
      setSort("price")
    }else{
      setOrder("");
      setSort("");
    }
  }

  const handleFilterClose = (index) => {
    let newCategory = [...category];
    newCategory.splice(index,1);
    setCategory(newCategory);
  }

  const fetchNewData = () => {
    let parameter;
    if(sort != ""){
      setSearchParams({category, order,sort})
      parameter = {
        category,
        _order: order,
        _sort: sort,
        _limit:6,
        _page: paging
      }
    }else{
      setSearchParams({category})
      parameter = {
        category,
        _limit: 6,
        _page:paging

      }
    }
    dispatch(getProducts(parameter));
    setPaging(prev => prev+1)
  }


  return (
    <div>
      <TOPDIV>
        <div style={{display:"flex", justifyContent:"space-between", paddingRight:"15%"}}>
          <Heading p={0} as={"h6"} size={"s"}>Filter</Heading>
          {category.length> 0 && <Heading cursor={"pointer"} onClick={()=>{setCategory([])}} color={"var(--primary1)"} p={0} mt={"7px"} as={"h6"} size={"xs"}>CLEAR FILTER</Heading>}
          
        </div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
        <div style={{display:"flex", gap:"4px"}}>
          {category?.map((el,index) => <Flex key={index} p={"0 6px 0 12px"} borderRadius={"30px"} border={"1px solid var(--para-text)"} alignItems={"center"} color={"var(--para-text)"} gap={"5px"}><Text mb={"3px"}>{el}</Text><SmallCloseIcon cursor={"pointer"} onClick={()=>{handleFilterClose(index)}}/></Flex>)}
        </div>
        <SELECTDIV>
          <select onChange={handleSort} name="price">
              <option selected={order == ""} value={["",""]}>Recommended</option>
              <option selected={order == "asc" && sort == "price"} value={["price","asc"]} >Low to High</option>
              <option selected={order == "desc"} value={["price","desc"]} >High to Low</option>
              <option selected={order == "desc" && sort == "rating"} value={["rating","asc"]} >Rating</option>
          </select>
          <ICONDIV>
            <ChevronDownIcon w={5} h={5}/>
          </ICONDIV>
        </SELECTDIV>
        </div>
      </TOPDIV>
    <PRODUCTS>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {categoryData?.map((item,index) => (
            <div className="inputItem" key={index}>
              <input
                type="checkbox"
                id={item.text}
                value={item.text}
                checked={category.includes(item.text)}
                onChange={handleChange}
              />
              <label htmlFor={item.text}>{item.text}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
      </div>


      <InfiniteScroll style={{marginTop:"30px", display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}
      dataLength={products.length}
      next={fetchNewData}
      >
        {products?.map(el => <ProductCart key={el.id} {...el}/>)}
      </InfiniteScroll>
    </PRODUCTS>
    </div>
  );
};

export  {ProductList};

const PRODUCTS = styled.div`
  padding: 0 4% 30px 4%;
  display: grid;
  grid-template-columns: 1fr 3fr;

  .left {
    position: sticky;
    padding-top: 30px;
    height: 90vh;
    top: 50px;
    margin-right: 30px;
    border-right: 1px solid #cdccc7;

    .filterItem{
      margin-bottom: 30px;

      h2{
        font-weight: 400;
        margin-bottom: 20px;
      }

      .inputItem{
        margin-bottom: 10px;
        label{
          margin-left: 10px;
        }
      }
    }
  }

`
const RIGHT = styled.div`
margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 20px;
`

const TOPDIV = styled.div`
padding: 0 4%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 40px;
  align-items: center;
  border-bottom: 1px solid #cdccc7;
`

const SELECTDIV = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  min-width: 250px;
  height: 30px;
  border: 1px solid var(--para-text);
  border-radius: 0;

  

  select{
    border: none;
    appearance: none;
    padding: 0 30px 0 15px;
    width: 100%;
    color: var(--para-text);
    &:focus{
    border: none;
  }
  }

  `
  const ICONDIV = styled.div`
    width: 35px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    position: absolute;
    right: 0;
  `
  