import { faGithub, faLinkedin, faLinkedinIn, faMedium } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="py-5 text-center">
            <p className="text-center color-1">Copyright © 2020 All rights reserved | <span className="text-warning">JIHAN CHOWDHURY</span></p>
            <div className="text-center mt-3">
                <a href="https://github.com/jinglad" target="_blank" className="social-icon">
                    <span>
                        <FontAwesomeIcon className="i" icon={faGithub} />
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/jihan-chowdhury-7135411b4/" target="_blank" className="social-icon">
                    <span>
                        <FontAwesomeIcon className="i" icon={faLinkedinIn} />
                    </span>
                </a>
                <a href="https://medium.com/@jihanchowdhury70" target="_blank" className="social-icon">
                    <span>
                        <FontAwesomeIcon className="i" icon={faMedium} />
                    </span>
                </a>
            </div>
            <p className="my-3 h3 color-1 font-weight-bold">Want to Message Me?</p>
            <Link to="/contact-me"><button className="btn btn-warning">Click Here</button></Link>
        </footer>
    );
};

export default Footer;