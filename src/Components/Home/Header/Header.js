import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <header className="m-0">
            <div className="container">
                <Navbar></Navbar>
                <HeaderMain></HeaderMain>
            </div>
        </header>
    );
};

export default Header;