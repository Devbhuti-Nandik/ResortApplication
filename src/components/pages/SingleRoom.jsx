import React,{useContext} from 'react';
import Hero from '../others/Hero';
import '../others/app.css';
import Banner from '../others/Banner';
import {Link, useParams} from 'react-router-dom';
import {RoomContext} from '../others/RoomContext';
import Footer from '../others/Footer';

function SingleRoom()
{
    const {slug}=useParams();//accessing parameters from the url
    const {singleRoomData}=useContext(RoomContext);//accessing function from the context jsx
    const singleRoom=singleRoomData(slug);
    if(!singleRoom)
    {
        return(
            <div>
                <Hero hero="hero-error">
                    <Banner title="Sorry, no rooms found...">
                        <Link to="/Rooms/" className="primary-btn">
                            Back to Rooms
                        </Link>
                    </Banner>
                </Hero>
                <hr/>
                <Footer/>
            </div>
        );
    }
    const {name,description,capacity,size,price,extras,breakfast,pets,images}=singleRoom;
    return(
        <div>
            <Hero hero="hero-singleRoom">
                <Banner title={name}>
                    <Link to="/rooms/">
                        <div className="primary-btn">
                            Back to Rooms
                        </div>
                    </Link>
                </Banner>
            </Hero>
            <section className="single-room">
                <div className="single-roomImg">
                    {images.map((image,index)=>{
                        return <img key={index} src={image} alt="Room Images" />;
                    })}
                </div>
            </section>
            <section className="single-room-details">
                <div className="single-roomDetails">
                    <article className="single-roomDesc">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="single-roomInfo">
                        <h3>Info</h3>
                        <h6>price: ${price}</h6>
                        <h6>size: {size} SQFT</h6>
                        <h6>max capacity: {capacity> 1 ? `${capacity} people`:`${capacity} person`}</h6>
                        <h6>{pets ? "pets allowed": "pets not allowed"}</h6>
                        <h6>{breakfast ? "free breakfast available":null}</h6>
                    </article>
                </div>
            </section>
            <section className="single-room-extras">
                <h3>extras</h3>
                <ul className="single-room-extras-list">
                    {extras.map((extra,index)=>{
                        return <li key={index}>-{extra}</li>
                    })}
                </ul>
            </section>
            
            <Footer/>
        </div>
    );
}
export default SingleRoom;