import React from 'react'
import { letter } from '../../data/user'
import { Link } from 'react-router-dom'
import "./Letter.css"

function Letter() {
  return (
    <div className='letter'>
      {
        letter.map((item, index) => (
            <p key={index}>
                <Link to={`/browse/${item}`}>{item}</Link> /
            </p>
        ))
      }
    </div>
  )
}

export default Letter
