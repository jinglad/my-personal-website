import React from 'react';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <div className="heading-text text-center text-white">
            <h2 className="display-4">Hello, I'm</h2>
            <h1 className="display-3 font-weight-bold">Jihan Chowdhury</h1>
            <p className="text-uppercase color-1 letter-spacing">AND THIS IS MY RESUME</p>
            <button className="btn btn-warning mt-2"><a className="text-decoration-none text-dark" target="_blank" href="https://drive.google.com/file/d/1UZuM4RjUmLMNS9eqyeSiSOC02tR1nicv/view?usp=sharing">Download My Resume</a></button>
        </div>
    );
};

export default HeaderMain;