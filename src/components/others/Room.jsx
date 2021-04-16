import React from 'react';
import {Link} from 'react-router-dom';

function Room(props) {
    const {name,slug,images,price}=props.room;
    return (
        <article className="room">
             <div className="img-container">
                <img src={images[0]} alt="single room"/>
                <div className="img-price">
                    <h6>${price}</h6>
                    <p className="img-price-duration">per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="primary-btn room-link">
                    Features
                </Link>
                <p className="roomImg-info">
                    {name}
                </p>
             </div>
        </article>
    );
}
export default Room;
