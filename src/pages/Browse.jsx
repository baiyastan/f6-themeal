import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { apiClient } from '../axios/apiClient'
import ProductList from '../components/ProductList/ProductList'

function Browse() {
    const {char} = useParams()
    const [product, setProduct] = useState([])
    const [error, setError] = useState(null)

    async function getMeals() {
        try {
            const res = await apiClient.get(`/search.php?f=${char}`)
            console.log(res);

            if(res.data.meals === null) {
                setError("Meals not Foun")
                setProduct([])
            } else {
                setProduct(res.data.meals)
                setError(null)
            }
        } catch (error) {
            console.log(error);            
        }
    }

    useEffect(() => {
        getMeals()
    }, [char])
     
  return (
    <div className='container'>
        <h1>Meals starting with '{char}'</h1>

        {
            error ? (
                <p>{error}</p>
            ) : (
                <ProductList data={product} />
            )
        }
    </div>
  )
}

export default Browse
