import React, { useState, useEffect } from "react";
import "./Gifs.css"


const Gifs = () => {
    const[gif,setGif] = useState(null)
    const [gifSrc,setGifSrc] = useState({})
    const [searchTerm,setSearchTerm] = useState('')
    console.log(searchTerm)

    const makeApiCall = async () => {
        const gifSrc = `https://api.giphy.com/v1/gifs/random?api_key=MXp93qgcRiKUv50uYCveBlyeiK1W4hcd`;
        try {
            const res = await fetch(gifSrc);
            const json = await res.json(); 
            setGifSrc({ image_url: json.data.images.downsized_large.url });
        } catch (err) {
            console.log('err', err);
        }
    };

    useEffect(() => {
        makeApiCall();
    }, []);

    const handleSubmit = async (val) => {
        if(val) {
            const gifSrc = `https://api.giphy.com/v1/gifs/search?api_key=MXp93qgcRiKUv50uYCveBlyeiK1W4hcd&q=${val}&limit=1`;
            const res = await fetch(gifSrc);
            const json = await res.json();
            setGifSrc({ image_url: json.data[0].images.downsized_large.url });
        } else {
            makeApiCall()
        }
    };

    const handleChange = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value);
    };
    


    return (
        <div className="main">
            
            <h1>Giphy</h1>

            <div className="search">
                <form onSubmit={handleSubmit}>
                    <input className="input" onChange={handleChange} placeholder="type of giphy" />
                    <button className="submit-button">Search</button>
                </form>
            </div>

            <div>
                {gifSrc.image_url ? (
                    <div className="gif-row">
                        < img src={gifSrc.image_url} alt="" />
                    </div>
                ) : (
                    <h2>Pull random gifs from Giphy</h2>
                )
                }
            </div>
        </div>
      )



}
export default Gifs