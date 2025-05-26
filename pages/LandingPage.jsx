import React from 'react';
import '../style.css';
import logo from '../src/Logo.jpg'; 

const LandingPage = () => {
    return (
        <div className="landing-page">
            {/* Header Section */}
            <header className="header">
                <img src={logo} alt="BellyBoom Logo" className="logo" />
                <h1 className="motto">Explode Your Hunger, Feast with Flavor!</h1>
            </header>

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
