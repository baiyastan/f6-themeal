import React, {useState, useEffect} from 'react'
import { apiClient } from '../axios/apiClient'
import { useParams } from 'react-router-dom'

function Info() {
    const {id} = useParams()
    const [detail, setDetail] = useState({})

    async function getInfo() {
        try {
            const res = await apiClient.get(`/lookup.php?i=${id}`)
            console.log(res);
            setDetail(res.data.meals[0])
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        getInfo()
    }, [id])
  return (
    <div>
      
    </div>
  )
}

export default Info
