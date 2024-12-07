import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Product from '../pages/product/Product'
import Basket from '../pages/basket/Basket'
import { BasketProvider } from '../context/BasketContext.jsx'
import Favorites from '../pages/favorites/Favorites.jsx'
import Login from '../pages/login/Login.jsx'
import SignUp from '../pages/signUp/SignUp.jsx'


const AppRoutes = () => {
  return (
    <div>
         <BasketProvider>
        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path="/product/:id" element={<Product/>}/>
            <Route path="/basket" element={<Basket />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />

        </Routes>
         </BasketProvider>
    </div>
  )
}

export default AppRoutes