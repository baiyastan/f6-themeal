import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner/Banner'
import { apiClient } from '../axios/apiClient'
import ProductList from '../components/ProductList/ProductList'
import Letter from '../components/Letter/Letter'
import Country from '../components/Country/Country'

function Home() {
  const [product, setProduct] = useState([])

  async function getMeal() {
    try {
      const res = await apiClient.get(`/search.php?s=s`)

      console.log(res);
      setProduct(res.data.meals)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMeal()
  }, [])


  return (
    <>
      <Banner />
      <div className='container'>
        <ProductList data={product} />
        <Country/>
        <Letter/>

      </div>
    </>
  )
}

export default Home
