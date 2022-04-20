import { useState } from "react";




export default () => {

    const [term, setTerm] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const [result, setResults] = useState([]);


    const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyA7398lZnxHV0Z0F0eWDC8uAuMjWHroNKE&type=video&q=" + term

    const getAPI = () => {
        try {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setResults(data)
            })
        } catch {
            setErrMessage("Something went wrong")
        }
    }


    return [term, result, setTerm, errMessage, getAPI]


}


















