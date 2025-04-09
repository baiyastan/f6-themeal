import React from 'react'
import "./Banner.css"

function Banner() {
    return (
        <div className='banner'>
        <div className='banner-content'>
          <img src="https://www.themealdb.com/images/meal-icon.png" alt="Meal Icon" />
          <div>
            <h1 className='big'>Welcome to TheMealDB</h1>
            <p className='small'>
              Welcome to TheMealDB: An open, crowd-sourced database of recipes from <br />
              around the world. <br />
              We offer <strong className='free'>a free recipe API</strong> for anyone wanting to use it, with additional <br />
              premium features if required.
            </p>
            <div>
              <button className='green'>Free API</button>
              <button className='yellow'>Go Premium</button>
            </div>
            <p className='small'>
              Upgrade the free Recipe API to premium for <strong className='free'>$10 lifetime one-off</strong>. <br />
              Currently 93 supporters.
            </p>
          </div>
          <img src="https://www.themealdb.com/images/meal-icon.png" alt="Meal Icon" />
        </div>
      </div>
    )
}

export default Banner
