import React from 'react';
import Hero from '../others/Hero';
import '../others/app.css';
import Banner from '../others/Banner';
import {Link} from 'react-router-dom';
import RoomsContainer from '../others/RoomsContainer';
import Footer from '../others/Footer';

function Rooms()
{
    return(
        <div>
            <Hero hero="hero-room">
                <Banner title="Our Rooms">
                    <Link to="/">
                        <div className="primary-btn">
                            Back to Home
                        </div>
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer />
            
            <Footer/>
        </div>
    );
}
export default Rooms;