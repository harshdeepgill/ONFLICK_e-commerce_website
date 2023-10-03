import React, { useEffect, useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, Input, FormLabel, FormControl, Box, InputGroup, InputRightElement, useToast, ModalHeader, Heading, ModalCloseButton, InputLeftElement, Link, Text, Flex } from '@chakra-ui/react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { login, register } from '../Redux/AuthReducer/action';
import { LOGIN_FAILURE, LOGIN_SUCSESS, SIGNUP_SUCCESS } from '../Redux/AuthReducer/actionType';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
} from '@chakra-ui/react'
import { BsEnvelopeAt, BsEye, BsEyeSlash, BsPerson } from "react-icons/bs";
import Logo from './Logo';
import { useNavigate, useParams } from 'react-router-dom';

const intialRegisteredData = { id: "", password: "", name: "",wishlist:[], cart:[], orders:[], image:""}
const initialLogin = { id: "", password: "" }



const SignInAndSignUp = ({onClose,isOpen}) => {

  const [registerdData, setRegiteredData] = useState(intialRegisteredData);
  const [loginData, setLogin] = useState(initialLogin);
  const searchParams = useParams();

  const [show, setShow] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const handleClick = () => setShow(!show);

  const nvigate = useNavigate();

  const dispatch = useDispatch();
  const toast = useToast();

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegiteredData({ ...registerdData, [name]: value })
  }


  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...loginData, [name]: value })
  }
  

  const loginSubmit = () => {
  

    dispatch(login(loginData))
      .then((res) => {
        if(res.data.id==="admin1234@gmail.com" && res.data.password==="admin@1234"){
          nvigate("/admin")
        }
       else if (res.data.password === loginData.password) {
          dispatch({ type: LOGIN_SUCSESS, payload:res.data });
          localStorage.setItem("flickUser", JSON.stringify({isAuthFlick:true, id:res.data.id}));

          toast({
            title: "Sign In Successfully!",
            position: "top-center",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          
          onClose();
          
        }
        else {
          
          toast({
            title: "Password do not match",
            position: "top-center",
            status: "error",
            duration: 2000,
            isClosable: true,
          })
         // console.log("not password matched")
        }
      }).catch((error) => {
        dispatch({type: LOGIN_FAILURE}); 
        toast({
          title: "Account Not Found",
          description: "Create a new account",
          position: "top-center",
          status: "error",
          duration: 2000,
          isClosable: true,
        })
      })


  }
  const registerSubmit = (e) => {
    e.preventDefault();
    console.log("abc")
    dispatch(register(registerdData))
    .then((res) => {
      console.log(res);
      dispatch({type:SIGNUP_SUCCESS});
      toast({
        title: "Account Created Successfully.",
        position: "top-center",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setRegiteredData(intialRegisteredData);
      setTabIndex(0);
    })
      .catch((err) => {
        console.log(err)
        dispatch({type:LOGIN_FAILURE})
        toast({
          title: "Something went wrong!",
          position: "top-center",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      })
  }

  


  return (


    <DIV>

      <Modal onClose={onClose} isOpen={isOpen} size="sm" isCentered  >
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='1%'
          backdropBlur='2px'
        />
       
          <ModalContent  minHeight={window.innerHeight*0.8} bg={"#f5f6f6"} >
            <ModalHeader>{tabIndex==0? <div style={{fontSize:"1.5rem"}}><Logo size={"2rem"}/></div>:<div><Logo size={"2rem"}/></div>}</ModalHeader>
            <ModalCloseButton />
            <ModalBody p={0}>


              <Tabs colorScheme='blackAlpha' variant="enclosed" isFitted id='tab' index={tabIndex} onChange={(index)=>{setTabIndex(index)}} >

                <TabList  display={"flex"} justifyContent={"center"}>
                  <Tab borderRadius={0}>Login</Tab>
                  <Tab borderRadius={0}>Signup</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <FormControl action="" width="100%" margin="auto">
                      < FormLabel>Enter Email</ FormLabel>
                      <InputGroup>
                      <InputLeftElement>
                        <BsEnvelopeAt fontSize={"1.3rem"}/>
                      </InputLeftElement>
                      <Input
                      variant={"flushed"}
                        type="text"
                        placeholder='example@mail.com'
                        name='id'
                        value={loginData.id}
                        onChange={handleLoginChange}
                      />
                      </InputGroup>
                      < FormLabel>Enter Password</ FormLabel>

                      <InputGroup size='md'>
                        <Input
                        colorScheme='black'
                        variant={"flushed"}
                          pr='4.5rem'
                          type={show ? 'text' : 'password'}
                          placeholder='********'
                          name='password'
                          value={loginData.password}
                          onChange={handleLoginChange}
                        />
                        <InputLeftElement>
                            {show ? <BsEye style={{ cursor:"pointer"}} onClick={handleClick} fontSize={"1.5rem"}/> : <BsEyeSlash style={{ cursor:"pointer"}} onClick={handleClick} fontSize={"1.5rem"}/>}
                       
                        </InputLeftElement>
                      </InputGroup>
                      <Flex mt={"10px"} justifyContent={"flex-end"}>
                        <Link fontSize={"0.9rem"}>Forgot Password?</Link>
                      </Flex>

                      <Flex alignItems={"center"} mt={"16px"} gap={"10px"}>
                        <input style={{width: "15px", height:"15px"}} type='checkbox'/>
                        <Text>Remember me</Text>
                      </Flex>


                      <Box display={'flex'} justifyContent={'center'} mt={'20px'}>
                        
                          <Button _hover={{bg:"black", boxShadow:"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;"}} type='submit' bg={"black"} w={"100%"} borderRadius={0} color={"white"} onClick={loginSubmit}>Login</Button>
                        
                      </Box>
                    </FormControl>
                  </TabPanel>
                  <TabPanel>
                    <form onSubmit={registerSubmit}  id='register'>
                      < FormLabel>Enter Name</ FormLabel>
                      <InputGroup>
                      <InputLeftElement>
                        <BsPerson fontSize={"1.3rem"}/>
                      </InputLeftElement>
                      <Input type="text"
                      variant={"flushed"}
                        placeholder='John Doe'
                        name='name'
                        value={registerdData.name}
                        onChange={handleRegisterChange}
                      />
                      </InputGroup>
                      < FormLabel>Enter Email</ FormLabel>
                      <InputGroup>
                      <InputLeftElement>
                        <BsEnvelopeAt fontSize={"1.3rem"}/>
                      </InputLeftElement>
                      <Input type="text"
                      variant={"flushed"}
                        placeholder='example@mail.com'
                        name='id'
                        value={registerdData.id}
                        onChange={handleRegisterChange}
                      />
                      </InputGroup>
                      < FormLabel>Create Password</ FormLabel>
                      <InputGroup size='md'>
                        <Input
                          pr='4.5rem'
                          type={show ? 'text' : 'password'}
                          placeholder='****'
                          name='password'
                          value={registerdData.password}
                          onChange={handleRegisterChange}
                        />
                        <InputLeftElement>
                            {show ? <BsEye style={{ cursor:"pointer"}} onClick={handleClick} fontSize={"1.5rem"}/> : <BsEyeSlash style={{ cursor:"pointer"}} onClick={handleClick} fontSize={"1.5rem"}/>}
                        </InputLeftElement>
                      </InputGroup>
                      {/* <Input type="submit" /> */}
                      <Box display={'flex'} justifyContent={'center'} mt={'20px'} >
                          <Button  _hover={{bg:"black", boxShadow:"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;"}} bg={"black"} w={"100%"} borderRadius={0} color={"white"} type='submit'>Sigin Up</Button>
                      </Box>
                    </form>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </ModalBody>
            <ModalFooter justifyContent={"flex-start"}>
              <Text fontSize={"0.9rem"}>By Signing In, I agree to <Link color={"black"} textDecoration={"underline"}>Terms & Conditions.</Link></Text>
            </ModalFooter>
          </ModalContent>
     
      </Modal>
    </DIV>

  )
}

export default SignInAndSignUp
const DIV = styled.div`



`
