import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            {/* SVG Wave */}
            <div className="footer-wave">
                <svg
  className="footer-wave-svg"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1200 120"
  preserveAspectRatio="none"
>
  <defs>
    <linearGradient id="footerWaveGradient" gradientTransform="rotate(15)">
      <stop offset="0%" stop-color="#020314" />
      <stop offset="50%" stop-color="#2a2a2a" />
      <stop offset="100%" stop-color="#ffd700" stop-opacity="0.05" />
    </linearGradient>
  </defs>
  <path
    d="M321.39,56.44c58-10.79,114.16-30.13,
    172-41.86,82.39-16.72,168.19-17.73,
    250.45-.39C823.78,31,906.67,72,
    985.66,92.83c70.05,18.48,146.53,
    26.09,214.34,3V0H0V27.35A600.21,
    600.21,0,0,0,321.39,56.44Z"
    fill="url(#footerWaveGradient)"
  />
</svg>

            </div>

            {/* Footer Content */}
            <div className="footer-container">
                <div className="footer-column">
                    <h2 className="footer-title">ABOUT</h2>
                    <p>
                        Betting Casino Guide is your trusted companion in discovering
                        top betting platforms. We aim to deliver safe, informed choices.
                    </p>
                </div>

                <div className="footer-column">
                    <h2 className="footer-title">RESOURCES</h2>
                    <ul>
                        <li>Website Guidelines</li>
                        <li>Tips & Tricks</li>
                        <li>Photography</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h2 className="footer-title">INFORMATION</h2>
                    <ul>
                        <li>Guides & Reviews</li>
                        <li>How to Start</li>
                        <li>Legal Policies</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h2 className="footer-title">CONTACT</h2>
                    <ul>
                        <li>Email: support@casino.com</li>
                        <li>Phone: +91 9876543210</li>
                    </ul>
                    <div className="footer-icons">
                        <a href="#">GitHub</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Twitter</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>
            </div>

            {/* Email Subscribe */}
            <div className="footer-subscribe">
                <form className="footer-form">
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>

            {/* Footer Bottom Note */}
            <div className="footer-bottom">
                Made by Roshan Lal, Radhikesh Mishra and Ronit Bagga.
            </div>
        </footer>
    );
};

export default Footer;
