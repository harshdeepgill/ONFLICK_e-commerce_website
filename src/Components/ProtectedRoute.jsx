import React from 'react'
import { useSelector } from 'react-redux'
import SignInAndSignUp from './SignInAndSignUp';
import { useDisclosure } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    const isAuth = useSelector(store => store.authReducer.isAuth);
    console.log(isAuth)
    const { isOpen, onOpen, onClose } = useDisclosure();
    if(!isAuth){
        return (
            <Navigate to={"/login"}/>
        )
    }

  return (
    <div>
        {children}
    </div>
  )
}

export default ProtectedRoute