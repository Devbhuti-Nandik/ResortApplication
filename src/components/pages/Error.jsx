import React from 'react';
import Hero from '../others/Hero';
import Banner from '../others/Banner';
import {Link} from 'react-router-dom';
import '../others/app.css';

function ErrorPage()
{
    return(
        <div>
            <Hero hero="hero-error">
                    <Banner title="Error 404, page not found!!!">
                        <Link to="/" className="primary-btn">
                            Back to Home
                        </Link>
                    </Banner>
            </Hero>
        </div>
    );
}
export default ErrorPage;