import { Box, Button, Card, CardBody, Text, Input,Link as Clink,  InputGroup, InputRightElement, Menu, MenuButton, Heading, MenuList, SimpleGrid, Stack, StackDivider, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import {styled} from "styled-components";
import {ChevronDownIcon, CloseIcon, SearchIcon} from "@chakra-ui/icons";
import NavCatCard from './NavCatCard';
import {useDispatch, useSelector} from "react-redux";
import { getSearch } from '../Redux/SearchReducer/action';
import { useDebounce } from '../CoustomHooks/useDebounce';
import NavSearchCard from './NavSearchCard';
import SignInAndSignUp from './SignInAndSignUp';
import { FaOpencart, FaRegHeart } from 'react-icons/fa';
import { HiOutlineShoppingBag } from "react-icons/hi";
import Logo from './Logo';
import { LOGIN_FAILURE, LOGIN_SUCSESS, SIGNOUT } from '../Redux/AuthReducer/actionType';
import { login } from '../Redux/AuthReducer/action';
import SimpleTextCard from './Cards/SimpleTextCard';
import WishlistCard from './Cards/WishlistCard';


export const categoryData = [
  {imageUrl:"https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FCategory_cards%2FHeadphoneCat.png?alt=media&token=26a8b23d-1724-4fdb-ae33-28f7f8e5a189&_gl=1*yrtok1*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5NTkwNDEyNS4yMi4xLjE2OTU5MDQ0NTYuNjAuMC4w",
  text: "Headphones"
  },
  {imageUrl:"https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FCategory_cards%2FBagsCat.png?alt=media&token=ed0d203f-f84b-4904-9a6c-e91c53ce8df0&_gl=1*8pq0s7*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5NTkwNDEyNS4yMi4xLjE2OTU5MDQ0ODcuMjkuMC4w",
  text: "Bags"
  },
  {imageUrl:"https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FCategory_cards%2FBooksCat.png?alt=media&token=fbe37595-198a-47d5-8bd3-cdecea960783&_gl=1*sn37vj*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5NTkwNDEyNS4yMi4xLjE2OTU5MDQzMjQuNjAuMC4w",
  text: "Books"
  },
  {imageUrl:"https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FCategory_cards%2FFurnitureCat.png?alt=media&token=8b77e86b-f3d4-4012-84c7-bc2d34634ad5&_gl=1*10atbe*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5NTkwNDEyNS4yMi4xLjE2OTU5MDQzNTkuMjUuMC4w",
  text: "Furniture"
  },
  {imageUrl:"https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FCategory_cards%2FLaptopsCat.png?alt=media&token=b4c62785-646e-47cc-a97d-2cec96d49e7f&_gl=1*15dqaps*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5NTkwNDEyNS4yMi4xLjE2OTU5MDQzOTQuNjAuMC4w",
  text: "Laptops"
  },
  {imageUrl:"https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FCategory_cards%2FShoesCat.png?alt=media&token=6a5648f2-8e01-43c3-898f-72421a87935c&_gl=1*udskit*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5NTkwNDEyNS4yMi4xLjE2OTU5MDQ0MjQuMzAuMC4w",
  text: "Shoes"
  }
]

const flags = ["https://flagcdn.com/w320/in.png","https://flagcdn.com/w320/us.png", "https://flagcdn.com/w320/ca.png", "https://flagcdn.com/w320/de.png"]

function Navbar() {
  const { items, total } = useSelector((state) => state.cartReducer);
  const [focus, setFocus] = useState(false);
  const [typed, setTyped] = useState(false);
  const [flag, setFlag] = useState("https://flagcdn.com/w320/in.png");
  const [searchInput, setSearchInput] = useState();
  const dispatch = useDispatch();
  const newFunc = useDebounce(1000,dispatch);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const {isLoading,isError, products} = useSelector((store)=> {
    return {
      isLoading: store.searchReducer.isLoading,
      isError: store.searchReducer.isError,
      products: store.searchReducer.products,
    }
  })

  const {isAuth,name,wishlist,cart} = useSelector((store) => { 
    return  {
      isAuth: store.authReducer.isAuth,
      name: store.authReducer.name,
      wishlist: store.authReducer.wishlist,
      cart: store.authReducer.cart
    }
  })

  const hanldeSearchFocus = ()=>{
    setFocus(true);
  }

  const handleSearch = (e)=>{
    setSearchInput(e.target.value);
    if(e.target.value.length > 0){
      setTyped(true);
      newFunc(getSearch(e.target.value));
    }else{
      setTyped(false);
    }
  }

  const handleCloseSearch = ()=>{
    setTyped(false);
    setFocus(false);
    setSearchInput("")
  }

  const handleFlagChange = (e)=>{
    setFlag(flags[Number(e.target.value)])
  }

  const handleSignOut = ()=>{
    dispatch({type:SIGNOUT});
    localStorage.setItem("flickUser", JSON.stringify({isAuthFlick:false, id:""}))
  }
  
  useEffect(()=>{
    if(localStorage.getItem("flickUser")!= undefined){
      const authStatus = JSON.parse(localStorage.getItem("flickUser"));
      if(authStatus.isAuthFlick == true){
        dispatch(login(authStatus))
        .then((res) => {
          if (res.status == 200) {
            dispatch({ type: LOGIN_SUCSESS, payload:res.data });
          }else{
            dispatch({type: LOGIN_FAILURE}); 
          }
        }).catch((error) => {
          console.log(error); 
        })
      }
    }
  },[])


  return (
    <>
    <div>
      <LILDIV>
        {
          isAuth? 
          <>
          <Text>{name}</Text>
          <Clink>My Account</Clink>
          <Clink onClick={handleSignOut}>Sign Out</Clink>
          </>
          :
          <>
          <Clink><Link onClick={onOpen}>Sign In / Join <Logo size={"1rem"}/></Link></Clink>
          </>
        }
        
        <Clink><Link>Coustomer Care</Link></Clink>
        <FLAGMAINDIV>
            <FLAGIMG>
                <img style={{width:"100%"}} src={flag} alt="not availabe"/>
            </FLAGIMG>
            <div>
                <SELECT onChange={handleFlagChange}>
                    <option value="0"><span>India</span></option>
                    <option value="1"><span>USA</span></option>
                    <option value="2"><span>Canada</span></option>
                    <option value="3"><span>Germany</span></option>
                </SELECT>
            </div>
        </FLAGMAINDIV>
      </LILDIV>
    </div>
    <DIV>
      <DIVLOGO>
        <Link to={"/"}><Logo size={"2rem"}/></Link>
      </DIVLOGO>

      <MIDDLENAVDIV>
      <DIV2>
      <Menu>
      <MenuButton  as={Button} variant={"link"} rightIcon={<ChevronDownIcon />}>
        Category
      </MenuButton>
      <MenuList>
        <SimpleGrid columns={2} spacing={4}>
          {
            categoryData.map((el, index) => <NavCatCard key={index} {...el}/> )
          }
        </SimpleGrid>
      </MenuList>
    </Menu>
      </DIV2>

          
        <HIDEANDSEEK focus={focus}>Deals</HIDEANDSEEK>
        <HIDEANDSEEK focus={focus}>New</HIDEANDSEEK>
        <HIDEANDSEEK focus={focus}>Sale</HIDEANDSEEK>
       

      <ANIMATEDIV  focus={focus}>
          <InputGroup alignItems={"center"}>
            <Input value={searchInput} border={"1px solid black"} placeholder='Search Products' _focus={{border:"1px solid black"}}  _hover={{border:"1px solid black"}} borderRadius={0} w={"100%"} h={"30px"} onChange={handleSearch} onFocus={hanldeSearchFocus}/>
            <InputRightElement onClick={handleCloseSearch} backgroundColor={"black"} color= "#FFFFFF" h={"30px"}>
              {!focus? <SearchIcon  boxSize={3}/>: <CloseIcon  boxSize={3}/> }
            </InputRightElement>
          </InputGroup>
        <SEARCHMENU focus={typed}>
          <Card>
            <CardBody>
              <Stack p={0} divider={<StackDivider/>} spacing='4'>
                {products?.map(el => <><NavSearchCard key={el.id} halfStar={Math.ceil(el.rating)-Math.floor(el.rating) == 1? 1:0} emptyStar={5 - Math.ceil(el.rating)} fullStar={Math.floor(el.rating)} {...el}/><StackDivider p={0}/></>)}
              </Stack>
            </CardBody>
          </Card>
        </SEARCHMENU>
      </ANIMATEDIV>
        
      </MIDDLENAVDIV>


      <DIVLOGO>
        <ICONDIV style={{marginLeft:"25px"}}>
          <FaRegHeart style={{fontSize:"1.5em"}} />
          {
            !isAuth?
            <HOVERINGDIV>
              <Text>Unlock Your Wishlist! Sign In to Your Dreams.</Text>
              <SimpleTextCard OnClick={onOpen} p={"3rem"} dims={"20"} size={"sm"} as={"h6"} text={"SIGN IN"}/>
            </HOVERINGDIV>
            : wishlist.length == 0?
            <HOVERINGDIV>
              <Text >Don't Leave It Empty! Start Wishing Now.</Text>
              <SimpleTextCard OnClick={()=>{navigate("/ProductList")}} p={"3rem"} dims={"20"} size={"sm"} as={"h6"} text={"PRODUCTS"}/>
            </HOVERINGDIV>
            :
            <HOVERINGDIV2>
              {wishlist.length>0 &&<WishlistCard halfStar={Math.ceil(wishlist[0].rating)-Math.floor(wishlist[0].rating) == 1? 1:0} emptyStar={5 - Math.ceil(wishlist[0].rating)} fullStar={Math.floor(wishlist[0].rating)}  {...wishlist[0]}/>}
              {wishlist.length>1 &&<WishlistCard halfStar={Math.ceil(wishlist[1].rating)-Math.floor(wishlist[1].rating) == 1? 1:0} emptyStar={5 - Math.ceil(wishlist[1].rating)} fullStar={Math.floor(wishlist[1].rating)} {...wishlist[1]}/>}
              {wishlist.length>2 &&<WishlistCard halfStar={Math.ceil(wishlist[2].rating)-Math.floor(wishlist[2].rating) == 1? 1:0} emptyStar={5 - Math.ceil(wishlist[2].rating)} fullStar={Math.floor(wishlist[2].rating)} {...wishlist[1]}/>}
            </HOVERINGDIV2>
          }
          <QTYDIV num={wishlist.length}>{wishlist.length}</QTYDIV>
        </ICONDIV>
        <ICONDIV>
          <HiOutlineShoppingBag style={{fontSize:"1.7rem"}}/>
          <QTYDIV num={items.length}>{items.length}</QTYDIV>
        </ICONDIV>
      </DIVLOGO>
    </DIV>
      <SignInAndSignUp isOpen={isOpen} onClose={onClose}/>

    </>
  )
}

export default Navbar


const ICONDIV = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
`

const HOVERINGDIV = styled.div`
z-index: 5;
  min-width: 380px;
  min-height: 145px;
  background-color: white;
  display: none;
  position: absolute;
  right: 0;
  top: 50px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: 1000ms display ease-in-out;


  ${ICONDIV}:hover &{

    display: flex;
    flex-direction: column;
    gap:20px;
    justify-content: center;
    align-items: center;
  }
`
const HOVERINGDIV2 = styled.div`
z-index: 5;
  min-width: 380px;
  min-height: 145px;
  background-color: white;
  display: none;
  position: absolute;
  right: 0;
  top: 50px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: 1000ms display ease-in-out;


  ${ICONDIV}:hover &{

    display: flex;
    flex-direction: column;
    gap:20px;
    justify-content: center;
    align-items: center;
  }
`

const HIDEANDSEEK = styled.div`
  display: ${(props) => (props.focus? "none":"block")};
  transition: display 100ms;
`

const ANIMATEDIV = styled.div`
  position: relative;
  width: ${(props) => (props.focus? "80%": "40%")};
  transition: 150ms width ease-out;
`

const DIVLOGO = styled.div`
  height: 50px;
  width: 125px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`



const QTYDIV = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: red;
  bottom: 60%;
  left: 70%;
  font-size: 0.7rem;
  visibility: ${(props) => (props.num?"visible":"hidden")};
`
const DIV2 = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`
const DIV = styled.div`
  padding: 0 4% ;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MIDDLENAVDIV = styled.div`
  display: flex;
  width: 625px;
  justify-content: space-between;
`

const SEARCHMENU = styled.div`
  position: absolute;
  top: 150%;
  width: 100%;
  z-index: 5;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  display: ${(props)=> (props.focus?"block":"none")};
`

const LILDIV = styled.div`
  background-color: black;
  color: white;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  padding: 8px 1%;
`

const FLAGIMG = styled.div`
  width: 30px;
`

const SELECT = styled.select`
  width: 80px;
  outline: none;
  border: none;
  font-size: 15px;
  color: #484848;
  margin-left: 7px;
`

const FLAGMAINDIV = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px
`


