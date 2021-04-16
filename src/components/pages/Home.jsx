import React from 'react';
import Hero from '../others/Hero';
import '../others/app.css';
import Banner from '../others/Banner';
import Services from '../others/Services';
import {Link} from 'react-router-dom';
import FeaturedRooms from '../others/FeaturedRooms';

import Footer from '../others/Footer';
function Home()
{
    return(
        <div>
            {window.location.reload}
            <Hero hero="hero-home">
                <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at $200">
                    <Link to="/Rooms/">
                        <div className="primary-btn">
                            Our Rooms
                        </div>
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms/>
            
            <Footer />
            
            
        </div>
    );
}
export default Home;