import React from 'react'
import {Link} from 'react-router-dom'

const Products = () => {
  return (
    <section className='section product'>
    
    <h2>Welcome to Products page</h2>
    <Link to="/" className = "btn" >Home</Link>
        <Link to="/about" className = "btn" >About</Link>
        <Link to="/products" className = "btn" >Products</Link>
</section>
  )
}

export default Products