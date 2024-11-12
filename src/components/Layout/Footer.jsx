// src/components/Layout/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.css"; // Importing the custom CSS file

const Footer = () => {
    return (
        <footer className="bg-light py-5">
            <div className="container">
                <div className="row">
                    {/* Column 1: Links */}
                    <div className="col-12 col-md-3 mb-4">
                        <h5>Company</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/about" className="footer-link">About Us</Link>
                            </li>
                            <li>
                                <Link to="/careers" className="footer-link">Careers</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="footer-link">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Links */}
                    <div className="col-6 col-md-3 mb-4">
                        <h5>Support</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/help" className="footer-link">Help Center</Link>
                            </li>
                            <li>
                                <Link to="/faq" className="footer-link">FAQs</Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="footer-link">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Links */}
                    <div className="col-6 col-md-3 mb-4">
                        <h5>Resources</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/blog" className="footer-link">Blog</Link>
                            </li>
                            <li>
                                <Link to="/guides" className="footer-link">Guides</Link>
                            </li>
                            <li>
                                <Link to="/newsletter" className="footer-link">Newsletter</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Logo, Subscription Input, and Button */}
                    <div className="col-12 col-md-3 mb-4 footer-subscribe">
                        <img src="/logo.png" alt="Logo" className="footer-logo" />
                        <p className="text-muted">Subscribe to our newsletter</p>
                        <div className="input-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Your email"
                                aria-label="Your email"
                            />
                            <button className="btn btn-primary" type="button">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
