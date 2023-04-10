import React from 'react'
import {Heading,Box,FormControl,FormLabel,FormHelperText,Input,Button,Text} from "@chakra-ui/react";
import { useState } from "react";

import {useNavigate} from "react-router-dom";

const UserSignup = () => {
    const navigate = useNavigate();
    const [login,setlogin] = useState("");
    const [password,setPassword] = useState("");
    const [userName,setUserName] = useState("");
  return (
    <>
        <Heading textAlign={"center"}>User Signup Page</Heading>
        <Box>
            <FormControl display={"grid"} gridTemplateColumns={"repeat(1,1fr)"} gap="10px" width={"50%"} margin="auto">
                <FormLabel>Full Name</FormLabel>
                <Input type='text' onChange={(e)=>setUserName(e.target.value)}/>
                <FormHelperText>We'll never share your Name.</FormHelperText>

                <FormLabel>Email address</FormLabel>
                <Input type='email' onChange={(e)=>setlogin(e.target.value)}/>
                <FormHelperText>We'll never share your email.</FormHelperText>

                <FormLabel>Password</FormLabel>
                <Input type='password' onChange={(e)=>setPassword(e.target.value)}/>
                <FormHelperText>We'll never share your password.</FormHelperText>

                <Button onClick={()=>navigate("/user")}>Sign Up</Button>
                <Text textAlign="center">OR</Text>
                <Button onClick={()=>navigate("/userlogin")}>Login as existing user</Button>
            </FormControl>
        </Box>
    </>
  )
}

export default UserSignup