import axios from "axios";


export const fetchData = async(url:string,api_key:string | undefined) => {
    const options = {
        url:`${url}?api_key=${api_key}`,
        method:"GET",
    }
    try{
        const {data} = await axios(options)
        return data
    }catch(err){
        throw err
    }

}