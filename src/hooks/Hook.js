import React from 'react'
import { useState } from 'react';

const Hook = (isTag , tag)=>{
    const [loading,setloading] = useState(false);
    const API_KEY = "q7HnzlP69UdVlrw5eEOJnNT7ow96wZfj";
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const [gif, setgif] = useState("");

    async function fetchdata() {
        let urlkey = isTag ? `${url}&tag=${tag}`:url;
        setloading(true);
        let data = await fetch(urlkey);
        let response = await data.json();
        let image = response?.data?.images?.downsized_large?.url;
        setgif(image);
        setloading(false);
    }

    return {
        gif,
        fetchdata,
        loading
    };
}

export default Hook;

