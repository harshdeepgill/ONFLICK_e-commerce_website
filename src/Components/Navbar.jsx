import React from 'react'
import logo from '../assets/logo.png'
function Navbar() {
  return (
    <nav style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
      <div>
        <h2>Shopcart</h2>
      </div>
      <div style={{display:'flex', gap:"25px", alignItems:'center'}}>
        <a style={{textDecoration:'none', color:'black', fontWeight:"bold"}} href="">Category</a>
        <input type="text" placeholder='Search...' />
        <button>Search</button>
      </div>
      <div style={{display:'flex', alignItems:'center', gap:'25px'}}>
        <a style={{textDecoration:'none', color:'black', fontWeight:"bold"}} href="">A</a>
        <a style={{textDecoration:'none', color:'black', fontWeight:"bold"}} href="">Cart</a>
      </div>
    </nav>
  )
}

export default Navbar
