import React from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Admin from './pages/Admin';
import User from './pages/User';
import AdminAuth from './pages/AdminAuth';
import AdminLogin from './pages/adminLogin';
import UserSignup from './pages/UserSignup';
function App() {

  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/adminlogin' element={<AdminLogin/>}></Route>
      <Route path='/user' element={<User/>}></Route>
      <Route path='/usersignup' element={<UserSignup/>}></Route>
      <Route path='/userlogin' element={<User/>}></Route>
      </Routes>
    </div>
  )
}

export default App
