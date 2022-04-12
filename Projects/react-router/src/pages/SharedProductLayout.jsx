import React from 'react'
import {Outlet} from 'react-router-dom'

const SharedProductLayout = () => {
  return (
    <>
        <h3>Products</h3>
        <Outlet />
    
    </>
  )
}

export default SharedProductLayout