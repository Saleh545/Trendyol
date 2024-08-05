import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'


const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}  />
        </Routes>
    </div>
  )
}

export default AppRoutes