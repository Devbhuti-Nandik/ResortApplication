import React from 'react'
import loadingGif from '../images/gif/loading-gear.gif';

function Loading() 
{
    return (
        <div className="loading">
            <h3>Loading Room Data...</h3>
            <img src={loadingGif} alt="loading gif"/>   
        </div>
    )
}
export default Loading;