import React, {useEffect, useState} from 'react'
import { apiClient } from '../axios/apiClient'
import ProductList from '../components/ProductList/ProductList'
import { useParams } from 'react-router-dom'

function Area() {
  const {nurel} = useParams()
  const [products, setProducts] = useState([])
  
  async function getArea () {
    try {
      const res = await apiClient.get(`/filter.php?a=${nurel}`)
      console.log(res);
      setProducts(res.data.meals)
      
    } catch (error) {
      console.log(error);      
    }
  }

  useEffect(() => {
    getArea()
  }, [nurel])

  return (
    <div className='container'>
      <ProductList data={products} />
    </div>
  )
}

export default Area
