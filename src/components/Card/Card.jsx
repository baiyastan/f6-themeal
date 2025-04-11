import React from 'react'
import "./Card.css"

function Card({pro}) {
  return (

    <div className='card-top'>
      <img className='img' src={pro.strMealThumb} alt="" />
      <p className='food'>{pro.strMeal}</p>
    </div>

  )
}

export default Card
