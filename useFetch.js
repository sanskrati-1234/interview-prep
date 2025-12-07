import {useState,useEffect} from "react"
 export const useFetch = (url)=>{
    let [data,setData]= useState([]);
    let [isLoading,setIsLoading] = useState(false);
    let [error,setError] = useState({});

   async function fetchData(url) {
        setIsLoading(true);
         try{
             let res = await fetch(url);
             let data = await res.json();
             setData(data);
         }catch(err){
            setError(err)
             
         }finally{
             setIsLoading(false)
         }
    }
    useEffect(()=>{
        fetchData(url)
    },[url])

    return {data,isLoading,error}
}
