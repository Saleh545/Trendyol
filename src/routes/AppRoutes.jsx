import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Product from '../pages/product/Product'


const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path="/product/:id" element={<Product/>}/>
        </Routes>
    </div>
  )
}

export default AppRoutes