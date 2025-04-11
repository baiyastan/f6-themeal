import React from 'react'
import "./List.css"
import Card from '../Card/Card'

function ProductList({data}) {
  return (
    <div className='product-list container'>
      {
        data.map((item) => (
            <Card key={item.idMeal} pro={item} />
        ))
      }
    </div>
  )
}

export default ProductList
