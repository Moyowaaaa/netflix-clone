import React,{useState,useEffect} from 'react'
import axios from 'axios'


const useFetch = (url:string ) => {
    const api_key="fc66a3e2b7af135167185d8882134a83"
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const urlLink=`${url}?api_key=fc66a3e2b7af135167185d8882134a83&language=en-US`
    

    async function fetch() {
        try{
            const response = await axios.get(urlLink)
            console.log(response.data)
            setData(response.data)
            setLoading(true)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        fetch()
    },[url])

    return {data,loading}
}

export default useFetch