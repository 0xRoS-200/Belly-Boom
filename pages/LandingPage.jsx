import React from 'react';
import '../style.css';
import Header from '../components/Header';


const LandingPage = () => {
    return (
        <div className="landing-page">
            {/*Header Section*/}
            <Header />

            {/* Hero Section */}
            <section className="hero">
                <h2>Order Delicious Meals with BellyBoom!</h2>
                <p>From pizza to sushi, get your favorites delivered fast.</p>
                <button className="cta-button">Start Ordering Now</button>
            </section>

            {/* Footer Section */}
            <footer className="footer">
                <p>&copy; 2025 BellyBoom. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
