// src/components/Layout/Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css"; // Add custom styles if needed

const Navbar = () => {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    {/* Logo */}
                    <Link className="navbar-brand" to="/">
                        <img src="/logo.png" alt="Logo" style={{ width: "120px" }} />
                    </Link>

                    {/* Mobile - Offcanvas Toggle */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setIsOffcanvasOpen(true)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Centered Nav Links for Larger Screens */}
                    <div className="collapse navbar-collapse justify-content-center">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            {navLinks.map((link) => (
                                <li key={link.name} className="nav-item">
                                    <Link className="nav-link" to={link.path}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Aligned Button */}
                    <div className="d-none d-lg-block">
                        <button className="btn btn-primary">Get Started</button>
                    </div>

                    {/* Offcanvas for Mobile View */}
                    {isOffcanvasOpen && (
                        <div className="offcanvas-backdrop show" onClick={() => setIsOffcanvasOpen(false)}></div>
                    )}
                    <div className={`d-block d-lg-none  offcanvas offcanvas-end ${isOffcanvasOpen ? "show" : ""}`} tabIndex="-1">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title">Menu</h5>
                            <button type="button" className="btn-close" onClick={() => setIsOffcanvasOpen(false)}></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav">
                                {navLinks.map((link) => (
                                    <li key={link.name} className="nav-item">
                                        <Link className="nav-link" to={link.path} onClick={() => setIsOffcanvasOpen(false)}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <button className="btn btn-primary w-100 mt-3">Get Started</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
