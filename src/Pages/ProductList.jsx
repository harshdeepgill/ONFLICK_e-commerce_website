import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { categoryData } from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import ProductCart from "../Components/ProductCart";
import { getFirstProducts, getProducts } from "../Redux/productReducer/action";
import { Flex, Heading, Skeleton, Text } from "@chakra-ui/react";
import { ChevronDownIcon, SmallCloseIcon } from "@chakra-ui/icons";
import SimpleTextCard from "../Components/Cards/SimpleTextCard";
import { useDebounce } from "../CoustomHooks/useDebounce";
import LandingPageSkeleton from "../Components/LandingPageSkeleton";
import ProductListSkeleton from "../Components/ProductListSkeleton";

const ProductList = () => {
  const [maxPrice, setMaxPrice] = useState(1000);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const {products,isFinished,isLoading} = useSelector((store) => {
    return {
      products: store.productReducer.products,
      isFinished: store.productReducer.isFinished,
      isLoading: store.productReducer.isLoading
    }
    
  });
  const dispatch = useDispatch();
  
  const [category, setCategory] =  useState( searchParams.getAll("category") || []);
  const [order, setOrder] = useState(searchParams.get("order") || "");
  const [sort, setSort] = useState(searchParams.get("sort") || "");


  const newFunc = useDebounce(500, fetchNewData);


  const paging = useRef(1);



  useEffect(() => {
    document.documentElement.scrollTop = 0;
    paging.current = 1
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
    dispatch(getFirstProducts(parameter));
    

    const listenScrollEvent = () => {
      let {clientHeight,scrollTop,scrollHeight} = document.documentElement;
      // console.log("scrollHeight ",scrollHeight, "clientHeight ",clientHeight,"scrollTop ",scrollTop);
      if(Math.ceil(clientHeight+scrollTop)>=scrollHeight){
        newFunc();
      }
    }

    window.addEventListener("scroll",listenScrollEvent );

    return () => {
      window.removeEventListener("scroll",listenScrollEvent)
    }
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

  function fetchNewData(){
    paging.current++
    let parameter;
    if(sort != ""){
      setSearchParams({category, order,sort})
      parameter = {
        category,
        _order: order,
        _sort: sort,
        _limit:6,
        _page: paging.current
      }
    }else{
      setSearchParams({category})
      parameter = {
        category,
        _limit: 6,
        _page:paging.current

      }
    }
    dispatch(getProducts(parameter));
  }

  const onGoToTheTop = () => {
    document.documentElement.scrollTop = 0;
  }
console.log(isLoading)
  // if(isLoading){
  //   return (<ProductListSkeleton/>)
  // }
  


  return (
    <div>
      <TOPDIV>
        <div style={{display:"flex", justifyContent:"space-between"}}>
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


      <RIGHT>
        <PRODUCTSDIV>
          {products?.map(el => <ProductCart halfStar={Math.ceil(el.rating)-Math.floor(el.rating) == 1? 1:0} emptyStar={5 - Math.ceil(el.rating)} fullStar={Math.floor(el.rating)} key={el.id} {...el}/>)}
        </PRODUCTSDIV>
        {isFinished ? <div style={{textAlign:"center",width: "50%", display:"flex", flexDirection:"column", gap:"20px",margin:"auto", marginTop:"50px"}}>
      <Text fontSize={"1.5rem"} fontWeight={"400"}>Yay! You have seen it all.</Text>
      <SimpleTextCard text={"GO TO TOP!"} size={"lg"} as="h2" dims="50px" p="1rem" OnClick={onGoToTheTop }/>
    </div> : <Skeleton startColor='var(--primary2)' endColor='var(--primary1)' height='10px' mt={"20px"} mb={0} />}
      </RIGHT>
    </PRODUCTS>
    </div>
  );
};

export  {ProductList};

const PRODUCTS = styled.div`
  padding: 0 4% 30px 4%;
  display: grid;
  grid-template-columns: 1fr 4fr;

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
  
`
const PRODUCTSDIV = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: stretch;
  justify-content: space-between;
  -webkit-box-pack: justify;
`

const TOPDIV = styled.div`
padding: 0 4%;
  display: grid;
  grid-template-columns: 1.2fr 5.6fr;
  gap: 45px;
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
  