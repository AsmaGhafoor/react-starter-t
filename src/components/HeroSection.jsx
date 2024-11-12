// src/components/HeroSection.jsx

import React from "react";
import "../styles/HeroSection.css"; // Custom CSS for styling

const HeroSection = () => {
    return (
        <section className="hero-section d-flex align-items-center">
            <div className="container text-center text-white">
                <h1 className="hero-title">Welcome to Our Website</h1>
                <p className="hero-description">
                    This is an example of a responsive hero section with an overlay effect.
                </p>
                <button className="btn btn-primary hero-button">Get Started</button>
            </div>
        </section>
    );
};

export default HeroSection;
