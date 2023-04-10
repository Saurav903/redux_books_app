import React from 'react'
import {Button,Box,Heading} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
  return (
    <>
    <Heading textAlign={"center"}>Home Page</Heading>
    <Box display="grid" gridTemplateColumns={"repeat(2,1fr)"} gap="10px" justifyContent="center" alignItems={"center"} width={"100%"} margin={"auto"} height={"100vh"} backgroundColor={"blue.700"}>
        <Button fontSize={"50px"} padding={"30px 50px"} onClick={()=>navigate("/adminlogin")}>ADMIN</Button>
        <Button fontSize={"50px"} padding={"30px 50px"} onClick={()=>navigate("/usersignup")}>USER</Button>
    </Box>
    </>
  )
}

export default Home