import React from 'react';
//import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './Pages/home/Home.page';
import { Allroutes } from './Routers';
import { Register } from './Pages/register/Register';
import { Login } from './Pages/login/Login';

export let App:React.FC<{}>=()=>{

  return<>
  <BrowserRouter>
  <Allroutes/>
  {/* <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
  </Routes> */}
  </BrowserRouter>
  </>
}
