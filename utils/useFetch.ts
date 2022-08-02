import React,{useState,useEffect} from 'react'
import axios from 'axios'


const useFetch = (url:string ) => {
 
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
 
    async function fetch() {
        try{
            const response = await axios.get(urlLink)

            setData(response.data)
            setLoading(true)
        } catch(error) {
           return error
        }
    }

    useEffect(()=> {
        fetch()
    },[url])

    return {data,loading}
}

export default useFetch