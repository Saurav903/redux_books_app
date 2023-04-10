import React from 'react'
import {useNavigate} from "react-router-dom";
const AdminAuth = ({children}) => {
    const navigate = useNavigate();
    let adminlogin = JSON.parse(localStorage.getItem("token"));
    if(!adminlogin){
        return navigate("/adminlogin");
    } 
  return (
    <>{children}</>
  )
}

export default AdminAuth