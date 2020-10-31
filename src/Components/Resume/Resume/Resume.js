import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import './Resume.css';

const Resume = () => {
    return (
        <div className="container">
            <Navbar></Navbar>
            <div className="resume-container mt-5 p-5 bg-white">
                <div className="d-flex">
                    <div className="mr-5">
                        <h3>Mohammad Jihan Chowdhury</h3>
                        <h4>Web Developer</h4>
                        <p >Uttora,Dhaka</p>
                        <p ><span className="font-weight-bold">Phone : </span>+8801778485208</p>
                        <p className="m-0"><span className="font-weight-bold">Email : </span>jihanchowdhury70@gmail.com</p>
                        <a className="mr-2" href="https://www.linkedin.com/in/jihan-chowdhury-7135411b4/">Linkedin</a>
                        <a className="mr-2" href="https://github.com/jinglad">Github</a>
                        <a href="https://medium.com/@jihanchowdhury70">Medium</a>
                    </div>
                    <div className="ml-5">
                        <a href="https://drive.google.com/file/d/1UZuM4RjUmLMNS9eqyeSiSOC02tR1nicv/view?usp=sharing" target="_blank" className="btn btn-warning text-decoration-none text-dark">Download My Resume</a>
                    </div>
                </div>
                <div className="summary mt-5">
                    <h5 className="font-weight-bold">Summary</h5>
                    <p className="mt-3">I am skilled in web development, web designing, and making websites using WordPress.I can make any type of website, be it an e-commerce website, a business website, a promotional website, a blog, etc. My passion for web development started a few years ago. I am a Computer Science student currently and the web development sector of Computer Science has always fascinated me. I can spend hours on end learning how to code, design webpages, applying new innovative ideas to my older projects. It interests me so much so that I can now say web works are one of my favorite pastimes. I am pretty sure I am on the right path with this.</p>
                </div>
                <div className="languages_and_technologies mt-5">
                    <h5 className="font-weight-bold mb-3">Languages and Technologies</h5>
                    <p><span className="font-weight-bold">Languages : </span>Javascript, Node.js, c, c++, Html, CSS, PHP</p>
                    <p><span className="font-weight-bold">Library/Framework : </span>ReactJs, Bootstrap, Material UI</p>
                    <p><span className="font-weight-bold">Databases : </span>MongoDB, MySql</p>
                    <p><span className="font-weight-bold">Tools : </span>Git, Codeblocks, VS Code, Atom, Brackets, Notepad++, Sublime, Pycharm</p>
                    <p><span className="font-weight-bold">Others : </span>Heroku, Firebase, Netlify, Glitch, Chrome Dev Tool</p>
                    <p><span className="font-weight-bold">Familiar : </span>Python, Laravel, Wordpress Theme Development, Sass/Scss,
	       Express.js, Redux</p>
                    <p><span className="font-weight-bold">Operating System : </span>Windows and Linux(Ubuntu)</p>
                </div>
                <div className="projects mt-5">
                    <h5 className="font-weight-bold mb-3">Projects</h5>
                    <div className="mb-2">
                        <h5 className="font-weight-bold" style={{ color: "#29662a" }}>Volunteer-Network</h5>
                        <p className="font-weight-bold">Overview: </p>
                        <ul>
                            <li>MERN project. This is a volunteer registration website where user can find   many events and can register for a particular event.</li>
                            <li>This website has user authentication. User can login and see their registered events. And they can manage their events. Delete their events.</li>
                            <li>Admin can manage this website from admin-panel. Can add new events and see all the registered events. Can delete registered events.</li>
                        </ul>
                        <p><span className="font-weight-bold"> Technologies : </span>  ReactJs, MongoDB,Node.js, Express.js, Bootstrap, Firebase, Heroku, React-hook-form,React-Router</p>
                        <a href="https://volunteer-network-a49e7.web.app/">Website </a>
                        <a href="https://github.com/jinglad/volunteer-network-client" className="text-success">Client-Side-Code </a>
                        <a href="https://github.com/jinglad/volunteer-server-01">Server-Side-Code </a>
                    </div>
                    <div className="mb-2">
                        <h5 className="font-weight-bold" style={{ color: "#29662a" }}>Creative Agency</h5>
                        <p className="font-weight-bold">Overview: </p>
                        <ul>
                            <li>MERN project. This is an agency website where user can find many services and can order any of the services.</li>
                            <li>Has user authentication. User can login and see their ordered services.</li>
                            <li>User can give reviews about their ordered services.</li>
                            <li>Admin can manage ordered services. Can add New services.</li>
                        </ul>
                        <p><span className="font-weight-bold"> Technologies : </span> ReactJs, MongoDB,Node.js, Express.js, Bootstrap, Firebase, Heroku, React-hook-form,React-Router</p>
                        <a href="https://creative-agency-f57e2.web.app/">Website </a>
                        <a className="text-success" href="https://github.com/jinglad/creative-agency-client">Client-Side-Code </a>
                        <a href="https://github.com/jinglad/creative-agenct-backend">Server-Side-Code </a>
                    </div>
                    <div className="mb-2">
                        <h5 className="font-weight-bold" style={{ color: "#29662a" }}>Travel Guru</h5>
                        <p className="font-weight-bold">Overview: </p>
                        <ul>
                            <li>React-js Project. This is travel agency website where user can book a place for travel.</li>
                            <li>Has user authentication. User can login,find places,book hotel.</li>
                            <li>Has google map integration. User can see the address through the google map.</li>
                        </ul>
                        <p><span className="font-weight-bold"> Technologies : </span> React-js, firebase, bootstrap, Google-map, React-Router</p>
                        <a href="https://travel-guru-3adb2.web.app/">Website </a>
                        <a className="text-success" href="https://github.com/jinglad/travel-guru-app-09">Code </a>
                    </div>
                </div>
                <div className="skills mt-5">
                    <h5 className="font-weight-bold mb-3">Skills And Accomplishments</h5>
                    <ol>
                        <li>Web Development</li>
                        <li>Intermediate Problem Solving</li>
                        <li>Good Understanding In Data Structure And Algorithm</li>
                        <li>Solved 350+ problems in different online judge</li>
                        <li>Done A lot of web projects</li>
                    </ol>
                </div>
                <div className="experience mt-5">
                    <h5 className="font-weight-bold mb-3">Experience</h5>
                    <p className="font-weight-bold">Web Developer</p>
                    <p className="font-weight-bold">Abasas Technologies</p>
                    <p>Sylhet,Bangladesh</p>
                    <p>March,2020 - July,2020</p>
                </div>
                <div className="education mt-5">
                    <h5 className="font-weight-bold mb-3">Education</h5>
                    <p>
                        Sylhet Engineering College, Sylhet (February 2018 – Present) <br />
                    B.Sc In Computer Science and Engineering
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Resume;