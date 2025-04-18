import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'

function Card({pro}) {
  return (

    <div className='card-top'>
      <Link to={`/info/${pro.idMeal}`}>
        <img className='img' src={pro.strMealThumb} alt="" />
      </Link>
      <p className='food'>{pro.strMeal}</p>
    </div>

  )
}

export default Card
