import { useState } from "react";




export default () => {

    const [term, setTerm] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const [result, setResults] = useState([]);


    const url = "https://www.googleapis.com/books/v1/volumes?q=" + term

    const getAPI = () => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const bookData = data.items
                setResults(bookData)
            })
    }


    return [term, result, setTerm, errMessage, getAPI]


}