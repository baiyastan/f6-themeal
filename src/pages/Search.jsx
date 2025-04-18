import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { apiClient } from '../axios/apiClient'
import ProductList from '../components/ProductList/ProductList'


function Search() {
    const {value} = useParams()
    const [box, setBox] = useState([])

    async function getProducts() {
        try {
            const res = await apiClient.get(`/search.php?s=${value}`)
            console.log(res);
            setBox(res.data.meals)
            
        } catch (error) {
            console.log(error);            
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

  return (
    <div>
      <ProductList data={box} />
    </div>
  )
}

export default Search
