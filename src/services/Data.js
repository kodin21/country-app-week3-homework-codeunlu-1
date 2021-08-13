import axios from "axios";
import { useEffect,useState } from "react";

export default function GetAPI(){
    const[apiContext, setApiContext] = useState([])

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response => setApiContext(response.data))
        .catch(error => {
            console.log(error);
        })
    }, [])
    return apiContext
}