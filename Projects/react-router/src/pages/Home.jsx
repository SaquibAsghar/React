import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <section className='section'>
    
        <h2>Welcome to home page</h2>
        <Link to="/" className = "btn" >Home</Link>
        <Link to="/about" className = "btn" >About</Link>
        <Link to="/products" className = "btn" >Pproducts</Link>
    </section>
  )
}

export default Home