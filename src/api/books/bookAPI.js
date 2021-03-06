import { useState } from "react";




export default () => {

    const [term, setTerm] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const [result, setResults] = useState([]);


    const url = "https://www.googleapis.com/books/v1/volumes?q=" + term

    const getAPI = () => {
        try {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const bookData = data.items
                setResults(bookData)
            })
        } catch {
            setErrMessage("Something went wrong")
        }
    }


    return [term, result, setTerm, errMessage, getAPI]


}