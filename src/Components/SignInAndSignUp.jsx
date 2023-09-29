import React, { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, Input, FormLabel, FormControl, Box, InputGroup, InputRightElement, useDisclosure } from '@chakra-ui/react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { login, register } from '../Redux/AuthReducer/action';
import { LOGIN_SUCSESS } from '../Redux/AuthReducer/actionType';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

const intialRegisteredData = {id:"",password:"",name:""}
const initialLogin ={id:"",password:""}



const SignInAndSignUp = ({onClose,isOpen}) => {

  const [registerdData,setRegiteredData] = useState(intialRegisteredData);
  const [loginData,setLogin] = useState(initialLogin)

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  
  const dipatch = useDispatch();
  

  const handleRegisterChange=(e)=>{
    const {name,value} = e.target;

    setRegiteredData({...registerdData, [name]:value})


  }
  const handleLoginChange=(e)=>{
      
    const {name,value} = e.target;
  
  setLogin({...loginData,[name]:value})
  }

  const loginSubmit = () => {
  
  dipatch(login(loginData))
  .then((res)=>{
    console.log(res.data)
    if(res.data.password ===loginData.password){
        // dispatch({type:LOGIN_SUCSESS})
        //success alert
        console.log("password matched")
    }
    else{

        console.log("not password matched")
    }
  }).catch((error)=>{
    console.log(error)


  })
 
  
  }
  const registerSubmit=()=>{
dipatch(register(registerdData))
  }
 

  return (


    <>
    

    <Modal   onClose={onClose} isOpen={isOpen} size="sm" isCentered>
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='20%'
      backdropBlur='1px'
    />
     <DIV >
      <ModalContent bg={"#f5f6f6"} >
      <ModalBody>

     
      <Tabs variant="soft-rounded" id='tab' >
      <ModalCloseButton color={"red"}  />
        <TabList margin={"auto"}>
          <Tab>Login</Tab>
          <Tab>Signup</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <FormControl action="" width="100%" margin="auto">
              < FormLabel>Enter Email</ FormLabel>
              <Input
                type="text"
                placeholder='Enter Email'
                name='id'
                value={loginData.id}
                onChange={handleLoginChange}
              />
              < FormLabel>Enter Password</ FormLabel>

              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  placeholder='Enter password'
                  name='password'
                  value={loginData.password}
                  onChange={handleLoginChange}
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='xs' className='hide' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>


              {/* <Input type="submit" /> */}
              <Box display={'flex'} justifyContent={'center'} mt={'20px'}>
                <Button type='submit' colorScheme='linkedin' width="60px"  onClick={loginSubmit}>Login</Button>
              </Box>
            </FormControl>
          </TabPanel>
          <TabPanel>
            <FormControl  >
              < FormLabel>Enter Name</ FormLabel>
              <Input type="text" 
              placeholder='Name' 
              name='name'
              value={registerdData.name}
              onChange={handleRegisterChange}
              />
              < FormLabel>Enter Email</ FormLabel>
              <Input type="text" 
              placeholder='Enter Email' 
            name='id'
            value={registerdData.id}
              onChange={handleRegisterChange}
              />
              < FormLabel>Create Password</ FormLabel>
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  placeholder='Enter password'
                 name='password'
                 value={registerdData.password}
                  onChange={handleRegisterChange}
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='xs' className='hide' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {/* <Input type="submit" /> */}
              <Box display={'flex'} justifyContent={'center'} mt={'20px'}
              // fontSize={["sm", "md", "lg", "xl"]}
              >
                <Button colorScheme='linkedin' onClick={registerSubmit} type='submit'>Register</Button>
              </Box>
            </FormControl>
          </TabPanel>
        </TabPanels>
      </Tabs>
    
    </ModalBody>
      </ModalContent>
      </DIV>
    </Modal>
  </>    
    
  )
}

export default SignInAndSignUp
const DIV = styled.div`


/* border: 1px solid red; */
 #tab{
 
  width: 100%;
  
  flex-direction: column;
  align-items: center;
  

}

/*
input{
  font-size: 12px;
}
label{
  font-size: 13px;
}
button{
  font-size: 16px;
}
.hide{
  font-size: 10px;
} */

/* @media screen and (min-width: 769px) and (max-width: 1024px) {
    #tab {
      width: 100%;
    }
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    #tab {
      width: 60%;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 480px) {
    #tab {
      width: 90%;
    }
  }
  @media screen and (min-width: 0px) and (max-width: 320px) {
    #tab {
      width: 100%;
    }
  } */

`