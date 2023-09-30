import React, { useEffect } from 'react'
import SignInAndSignUp from './SignInAndSignUp'
import { useDisclosure } from '@chakra-ui/react'

const LoginPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(()=>{
        onOpen();
    },[])

  return (
    <div>
        <SignInAndSignUp isOpen={isOpen} onClose={onClose}/>
    </div>
  )
}

export default LoginPage