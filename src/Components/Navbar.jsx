import React from 'react';
import {styled} from "styled-components";


function Navbar() {
  return (
    <DIV>
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
    </DIV>
  )
}

export default Navbar

const DIV = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
`
