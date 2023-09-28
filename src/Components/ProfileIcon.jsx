import { Box, Button, Flex, FormControl, FormLabel, Image, Input, Link, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, StackDivider, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useReducer, useState } from 'react'
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";
import { storage } from '../firebase';
import {v4} from "uuid";
import axios from 'axios';

const defaultURL = "https://firebasestorage.googleapis.com/v0/b/travel-startup-f645e.appspot.com/o/Resources%2Fdefault_profile_picture.jpg?alt=media&token=e1ac6134-05ad-4d81-af38-33f3c57ec529"

const initialState = {
  firstName:"",
  lastName: "",
  email:"",
  imageUrl: null
}

const reducer = (state, action)=>{
  switch(action.type){
    case "INITIALFILL": return {
      ...state,
      firstName: action.payload.name.trim().split(" ")[0],
      lastName: action.payload.name.trim().split(" ")[1],
      email: action.payload.email,
      imageUrl: action.payload.imageUrl
    }
    case "REFILL": return {
      ...state,
      firstName: action.payload.name.trim().split(" ")[0],
      lastName: action.payload.name.trim().split(" ")[1],
      email: action.payload.email,
      imageUrl: action.payload.imageUrl
    }
    case "IMAGE": return {
      ...state,
      imageUrl: action.payload
    }
    case "FIRST": return {
      ...state,
      firstName: action.payload
    }
    case "LAST": return {
      ...state,
      lastName: action.payload
    }
    case "EMAIL": return {
      ...state,
      email: action.payload
    }
    default: return state
  }
}



const ProfileIcon = ({ handleLogout, userId}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const [formState, dispatch] = useReducer(reducer, initialState);


  const profilePicHandler = (e)=>{
    const imagePathInFirebase = e.target.files[0].name + v4();
    const imageRef = ref(storage, `profile_pictures/${imagePathInFirebase}`);
    uploadBytes(imageRef, e.target.files[0])
    .then(()=>{
      listAll(ref(storage, "profile_pictures/")).then((res)=>{
        res.items.forEach((el)=>{
          if(el._location.path_ === `profile_pictures/${imagePathInFirebase}`){
            getDownloadURL(el).then((url)=>{
              dispatch({type:"IMAGE", payload:url});
              alert("image uploaded!");
              console.log(url);
            })
          }
        })
      })
    })
  }

  const handleEditButton = ()=>{
    onOpen();
    
  }

  useEffect(()=>{
    // axios.get(`https://trevel-startup-provider.onrender.com/users/${userId}`).then((res)=>{
    //   dispatch({type: "INITIALFILL", payload:res.data});
    // })
  },[])


  const submitHandler = (e)=>{
    e.preventDefault();
    const body = {
      name: formState.firstName.charAt(0).toUpperCase() + formState.firstName.slice(1) + " "+ formState.lastName.charAt(0).toUpperCase() + formState.lastName.slice(1),
      email: formState.email,
      imageUrl: formState.imageUrl
    }

    axios.patch(`https://trevel-startup-provider.onrender.com/users/${userId}`, body).then((res)=>{
      dispatch({type:"REFILL", payload: res.data});
    })
  }


  return (
    <Flex alignItems={"center"} gap={"20px"}>
        <div style={{width:"2px", height:"27px", backgroundColor:"gray", borderRadius:"1px"}}></div>
        <Link>My Bookings</Link>
        <Link>Wishlist</Link>
        <Menu >
            <MenuButton as={Button} boxSize='2.5rem' borderRadius='50%' p={0} ><Image boxSize='2.5rem' borderRadius='50%' src={formState.imageUrl || defaultURL} alt='Profile Picture'/></MenuButton>
        <MenuList p={"5px 0"}>
            <VStack w={"150px"} divider={<StackDivider borderColor='gray.200' />}>
                <MenuGroup><MenuItem onClick={handleEditButton} color={"black"}>Edit Profile</MenuItem></MenuGroup>
                <MenuGroup><MenuItem onClick={handleLogout}  color={"red"}>Logout</MenuItem></MenuGroup>
            </VStack>
        </MenuList>
        </Menu>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay/>
          <ModalContent>
            <ModalHeader>Edit Profile</ModalHeader>
            <ModalBody>
              <form onSubmit={submitHandler}>
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input value={formState.firstName} onChange={(e)=>{dispatch({type:"FIRST", payload:e.target.value})}} placeholder='First Name' type='text'/>
                </FormControl>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input value={formState.lastName} onChange={(e)=>{dispatch({type:"LAST", payload:e.target.value})}} placeholder='Last Name' type='text'/>
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input value={formState.email} onChange={(e)=>{dispatch({type:"EMAIL", payload:e.target.value})}} placeholder='Email' type='email'/>
                </FormControl>
                <FormControl >
                  <FormLabel>Profile Picture</FormLabel>
                  <Flex h={"50px"} alignItems={"center"}>
                    <label style={{backgroundColor:"white",height:"35px",border:"1px solid gray", padding:"5px", color:"black",borderRadius:"2px", cursor:"pointer"}}>
                      <input onChange={profilePicHandler} style={{display:"none"}} type='file'/>
                      Upload
                    </label>
                  </Flex>
                </FormControl>
              <ModalFooter>
                <Box w={"100%"}>
                  <Flex justifyContent={"center"} gap={"20px"}>
                    <Button w={"100px"} onClick={onClose} >Cancel</Button>
                    <Button w={"100px"} type='submit'>Save</Button>
                  </Flex>
                </Box>
              </ModalFooter>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
    </Flex>
  )
}

export default ProfileIcon