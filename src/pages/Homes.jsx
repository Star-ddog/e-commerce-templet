import React from 'react'
import Annoucement from '../components/Annoucement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbars from '../components/Navbars'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Homes = () => {
  return (
    <div>
       <Annoucement/>
        <Navbars/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Homes