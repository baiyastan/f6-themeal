import React from 'react'
import { letter } from '../../data/user'
import { Link } from 'react-router-dom'

function Letter() {
  return (
    <div>
      {
        letter.map((item, index) => (
            <p key={index}>
                <Link>{item}</Link>
            </p>
        ))
      }
    </div>
  )
}

export default Letter
