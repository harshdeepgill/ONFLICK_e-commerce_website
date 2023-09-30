import React, { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, Input, FormLabel, FormControl, Box, InputGroup, InputRightElement, useDisclosure, useToast } from '@chakra-ui/react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { login, register } from '../Redux/AuthReducer/action';
import { LOGIN_FAILURE, LOGIN_SUCSESS } from '../Redux/AuthReducer/actionType';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useForm } from "react-hook-form";

const intialRegisteredData = { id: "", password: "", name: "" }
const initialLogin = { id: "", password: "" }
const SignInAndSignUp = () => {

  const [registerdData, setRegiteredData] = useState(intialRegisteredData);
  const [loginData, setLogin] = useState(initialLogin)

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
        console.log(res.data)
        if (res.data.password === loginData.password) {
          dispatch({ type: LOGIN_SUCSESS })
         
          toast({
            title: "Sign In Successfully!",
            position: "top-center",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          
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
        //console.log(error)
        //user not
        dispatch({type: LOGIN_FAILURE}) 
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
  const registerSubmit = () => {
    dispatch(register(registerdData)).then((res) => {
      toast({
        title: "Account Created Successfully.",
        position: "top-center",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      document.getElementById("register").reset();
    })
      .catch(() => {
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
      <Button onClick={onOpen}>Trigger modal</Button>

      <Modal onClose={onClose} isOpen={isOpen} size="sm" isCentered  >
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='1%'
          backdropBlur='2px'
        />
       
          <ModalContent bg={"#f5f6f6"} >
            <ModalBody>


              <Tabs variant="soft-rounded" id='tab'  >

                <TabList display={"flex"} justifyContent={"center"}>
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
                        <ModalFooter>
                          <Button colorScheme='linkedin' width="60px" mr={3} onClick={onClose}>
                            Close
                          </Button>


                          <Button type='submit' colorScheme='linkedin' width="60px" onClick={loginSubmit}>Login</Button>
                        </ModalFooter>
                      </Box>
                    </FormControl>
                  </TabPanel>
                  <TabPanel>
                    <FormControl  id='register'>
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
                        <ModalFooter>
                          <Button colorScheme='linkedin' width={"70px"} mr={3} onClick={onClose}>
                            Close
                          </Button>
                          <Button colorScheme='linkedin' width={"70px"} onClick={registerSubmit} type='submit'>Sigin Up</Button>

                        </ModalFooter>
                      </Box>
                    </FormControl>
                  </TabPanel>
                </TabPanels>
              </Tabs>

            </ModalBody>
          </ModalContent>
     
      </Modal>
    </DIV>

  )
}

export default SignInAndSignUp
const DIV = styled.div`



`