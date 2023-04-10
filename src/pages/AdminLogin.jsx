import React from 'react'
import {Heading,FormControl,FormLabel,Input,FormHelperText,Button} from "@chakra-ui/react";
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
const AdminLogin = () => {
  const navigate = useNavigate();
  const [login,setlogin] = useState("");
  const [password,setPassword] = useState("");
  const handleClick=()=>{
    if(login === "admin@gmail.com" && password === "masai"){
      localStorage.setItem("token",JSON.stringify("5165444"));
      navigate("/admin")
    }else {
      alert("wrong creadential");
    }
  }
  return (
    <>
      <Heading>Admin Login</Heading>
      <FormControl display={"grid"} gridTemplateColumns={"repeat(1,1fr)"} gap="10px" width={"50%"} margin="auto">
        <FormLabel>Email address</FormLabel>
        <Input type='email' onChange={(e)=>setlogin(e.target.value)}/>
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel>Password</FormLabel>
        <Input type='password' onChange={(e)=>setPassword(e.target.value)}/>
        <FormHelperText>We'll never share your password.</FormHelperText>
        <Button onClick={handleClick}>Login</Button>
      </FormControl>
      
    </>
  )
}

export default AdminLogin