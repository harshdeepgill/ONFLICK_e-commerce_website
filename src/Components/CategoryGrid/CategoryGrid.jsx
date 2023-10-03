import React from 'react'
import CategoryGridCard from './CategoryGridCard'
import styled from 'styled-components'
import {Link} from "react-router-dom";
const categoryData = [
  {imageUrl:"https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FCategory_cards%2FFurniture.png?alt=media&token=e37098a5-193f-4f5c-b6da-af74eeea5fd9&_gl=1*z5fol*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5NTgzMjgyNC4yMC4xLjE2OTU4MzMxMzIuMC4wLjA.",
  text: "Furniture"
  },
    {imageUrl:"https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FCategory_cards%2FHeadphones.jpg?alt=media&token=922e0a68-9263-4fcc-8a46-2b9407754512&_gl=1*kma976*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5NTkyODgzOS4yNS4xLjE2OTU5MjkwMjAuMzguMC4w",
    text: "Headphones"
    },
    {imageUrl:"https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FCategory_cards%2FBags.png?alt=media&token=22d55a34-84ab-43eb-a36f-2663d11d0345&_gl=1*twlpm8*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5NTgzMjgyNC4yMC4xLjE2OTU4MzMwOTAuMC4wLjA.",
    text: "Bags"
    },
    {imageUrl:"https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FCategory_cards%2FBooks.png?alt=media&token=be519c3a-dc58-4ed8-b804-d4eb905ab436&_gl=1*1r0cv3c*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5NTgzMjgyNC4yMC4xLjE2OTU4MzMxMTQuMC4wLjA.",
    text: "Books"
    },
    {imageUrl:"https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FCategory_cards%2FShoes.png?alt=media&token=2e3bbef8-cbc7-4655-aebb-2f14f38e9b80&_gl=1*bptrcq*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5NTgzMjgyNC4yMC4xLjE2OTU4MzMxODAuMC4wLjA.",
    text: "Shoes"
    },
    {imageUrl:"https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FCategory_cards%2FLaptops.png?alt=media&token=2343aa67-9054-4932-89c6-be726abe8001&_gl=1*1ftvoju*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5NTgzMjgyNC4yMC4xLjE2OTU4MzMxNTEuMC4wLjA.",
    text: "Laptops"
    }
]                  
                
const CategoryGrid = () => {
  return (
    <DIV>
        {categoryData.map((el, index) => <Link to={`/productlist?category=${el.text}`}><CategoryGridCard key={index}  text={el.text} image={el.imageUrl}/></Link>)}
    </DIV>
  )
}

export default CategoryGrid

const DIV = styled.div`
  width: 90%;
  display: flex;
  margin: auto;
  justify-content: space-between;
`