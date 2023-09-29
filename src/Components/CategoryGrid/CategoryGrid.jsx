import React from 'react'
import CategoryGridCard from './CategoryGridCard'
const categoryData = [
    {imageUrl:"https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FCategory_cards%2FHeadphone.avif?alt=media&token=171c8c18-8418-44ca-b6ef-cf2ebeab02c5&_gl=1*1pn2fbh*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5NTgzMjgyNC4yMC4xLjE2OTU4MzMwNTUuMC4wLjA.",
    text: "Headphone"
    },
    {imageUrl:"https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FCategory_cards%2FBags.png?alt=media&token=22d55a34-84ab-43eb-a36f-2663d11d0345&_gl=1*twlpm8*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5NTgzMjgyNC4yMC4xLjE2OTU4MzMwOTAuMC4wLjA.",
    text: "Bags"
    },
    {imageUrl:"https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FCategory_cards%2FBooks.png?alt=media&token=be519c3a-dc58-4ed8-b804-d4eb905ab436&_gl=1*1r0cv3c*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5NTgzMjgyNC4yMC4xLjE2OTU4MzMxMTQuMC4wLjA.",
    text: "Books"
    },
    {imageUrl:"https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FCategory_cards%2FFurniture.png?alt=media&token=e37098a5-193f-4f5c-b6da-af74eeea5fd9&_gl=1*z5fol*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5NTgzMjgyNC4yMC4xLjE2OTU4MzMxMzIuMC4wLjA.",
    text: "Furniture"
    },
    {imageUrl:"https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FCategory_cards%2FLaptops.png?alt=media&token=2343aa67-9054-4932-89c6-be726abe8001&_gl=1*1ftvoju*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5NTgzMjgyNC4yMC4xLjE2OTU4MzMxNTEuMC4wLjA.",
    text: "Laptops"
    },
    {imageUrl:"https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FCategory_cards%2FShoes.png?alt=media&token=2e3bbef8-cbc7-4655-aebb-2f14f38e9b80&_gl=1*bptrcq*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5NTgzMjgyNC4yMC4xLjE2OTU4MzMxODAuMC4wLjA.",
    text: "Shoes"
    }
]
                
                
                
                
                
const CategoryGrid = () => {
  return (
    <div>
        {categoryData.map((el, index) => <CategoryGridCard key={index}  text={el.text} image={el.imageUrl}/>)}
    </div>
  )
}

export default CategoryGrid