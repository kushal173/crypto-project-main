import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home,Crypto } from './Pages'
import Newws from './comp/news/newws'
import Detail from './comp/Detail/detail'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import { auth } from "./firebase";
const App = () => {
  return (
    <>
   
      <Routes>
     
        <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/home' exact element={<Home />}>   </Route>
        <Route path='/cryptocurency' exact element={<Crypto />}>   </Route>
        <Route path={`/cryptocurency/crypto/:uuid`} exact element={<Detail />}>   </Route>
        <Route path='/news' exact element={<Newws />}>   </Route>
      </Routes>
      
    </>
  )
}

export default App