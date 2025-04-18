import React from 'react'
import "./Country.css"
import { flags } from '../../data/user'
import { Link } from 'react-router-dom'

const IMG_API = "https://www.themealdb.com/images/icons/flags/big/64"

function Country() {
  return (
    <div className='flags container'>
      {
        flags.map((item, index) => (
            <div key={index}>
              <Link to={`area/${item.str}`}>
                  <img src={`${IMG_API}/${item.img}.png`} alt="" />
              </Link>
            </div>
        ))
      }
    </div>
  )
}

export default Country
