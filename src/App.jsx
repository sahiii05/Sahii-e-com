import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'
import Register from './component/Register'
import Login from './component/Login'
import FeaturedProducts from './pages/FeaturedProducts'
import ProductDetails from './pages/ProductDetails'
import Categories from './pages/Categories'
import AllCategories from './pages/AllCategories'
import Men from './pages/Men'
import Women from './pages/Women'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/all-categories' element={<AllCategories />} />
        <Route path='/featuredproducts' element={<FeaturedProducts />} />
        <Route path='/productdetails' element={<ProductDetails />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App