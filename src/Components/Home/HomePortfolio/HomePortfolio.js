import React from 'react';
import { Link } from 'react-router-dom';
import HomePortfolioItem from '../HomePorfolioitem/HomePortfolioItem';
import img_1 from '../../../image/c_a_1.png';
import img_2 from '../../../image/c_a_2.png';
import img_3 from '../../../image/c_a_3.png';
import img_4 from '../../../image/c_a_4.png';

const portfolioData = [
    {
        title: "Volunteer Network",
        shortDescription : "This is a volunteer registration website where user can find many events and can register for a particular event.",
        description : "Volunteer Network is a MERN project. In this website user can find many events and register for any of the events as a volunteer.User can register as many events as they want to attend as a volunteer.User can also see their register events on the event page. User can manage their registered events. Like they can cancel any registered event when they want.This website have user authentication. User have to login for register event. Without login they can't have the access to go to the registration page.Admin can see all users registered events.Admin can cancel registered events and can also add new events",
        technologies : "ReactJs, MongoDB, Node.js, Express.js, Bootstrap, Firebase, Heroku,React-hook-form,React-Router",
        website : "https://volunteer-network-a49e7.web.app",
        client_side_code : "https://github.com/jinglad/volunteer-network-client",
        server_side_code : "https://github.com/jinglad/volunteer-server-01",
        img_1 : "https://lh3.googleusercontent.com/TstwT1nuObXQ0_Js5VAibntdEI5v3KgGFFZi6ZOFjhRgSvduH7vhm_aQCPUdn6uHSCLIo5xvJ25RCr8Y0qoARsiVr4efpK4V_uswe-OF8SM7jL4EGRgbOTw_wY7zEZye0Nk0u7qf4A=w2400",
        img_2 : "https://lh3.googleusercontent.com/r41G0QA0JvwdUiA8UJ7XfeB7ZSrlDC68ZoQFVp8f12kz8MPe8a8IyaFI-hRceVne8oVzZGgoBDPug_msRxIfZrGTZBZ1ITMpBoi2CKQUF3JLVpMbZmRbceSd45-iVvOychlqevm13w=w2400",
        img_3 : "https://lh3.googleusercontent.com/zZNf7O6fqLerAZ13C_-kTKvcAnY8mHzIPvHQeSu6-_KUVkFwr8o0gvUYENUK7X29cr1jJo1TE9o51jZqgny5KMuK86xvViaweD1Kn5ecpZl4mKfg7THW9dZTfkcccUu5ZdlMzr-ZxA=w2400",
        img_4 : "https://lh3.googleusercontent.com/v-1BLTZ8fhLYZqteA1sB87J3PE7cH57qkfXAh9gkUIJ0SzRZaO2QeE66DKqZgfvkqgTH60ZoSGg-paDjQHU35BfrnpxJPyck7D_TylAjSRfhDwh-NyDn8bx1NA94nOMlzL2HXoPyBg=w2400"
    },
    {
        title: "Creative Agency",
        shortDescription : "This is an agency website where user can find many services and can order a particular service.",
        description : "Creative Agency is MERN project. User can find many services and can order any of the services. User can login and order any of the services. User can also give feedback. User can see all of their ordered services. Admin can manage the websites from admin panel. Admin can see all users ordered services. Admin can add new services. Admin can remove services. This website has user authentication. Without authentication user cannot have the access to go to service order page and cannot see the ordered services also cannot give feedback. User don't have the access of the admin panel.",
        technologies : "ReactJs, MongoDB, Node.js, Express.js, Bootstrap, Firebase, Heroku,React-hook-form,React-Router",
        website : "https://creative-agency-f57e2.web.app",
        client_side_code : "https://github.com/jinglad/creative-agency-client",
        server_side_code : "https://github.com/jinglad/creative-agenct-backend",
        img_1 : img_1,
        img_2 : img_2,
        img_3 : img_3,
        img_4 : img_4,
    },
    {
        title: "Travel Guru",
        shortDescription : "This is a travel agency website where user can find many places and can book a place for visit.",
        description : "Travel Guru is a ReactJs project. In this Website User can find many tourists places for tour. User can register places for tour. User can also find available hotels in the website and book hotel room. User can find the places through google map. This website have user authentication. User cannot book any date for tour or hotel without login.",
        technologies : "ReactJs, Bootstrap, Firebase, Google Map, React-Router",
        website : "https://travel-guru-3adb2.web.app",
        client_side_code : "https://github.com/jinglad/travel-guru-app-09",
        server_side_code : "",
        img_1 : "https://lh3.googleusercontent.com/y--7KeOj-nmrb8MrmeMfXzTClf65k6SIzQmzNJfhlgDb4Oez96cgWoDKqGWZmc-1ZRnbZhSxj3XQsZwIp1sUe_IGIFGJz1nXBWhHR1HLWkvl_2PhCC1o0pW2zUMW8DHFvSwOwvlZBQ=w2400",
        img_2 : "https://lh3.googleusercontent.com/sEd6scnAC7QzqhL8jJWy_Tnntq2gdF3_EafDoZgTUWjTrKuFQ4NXQISxGgS0EMNczgDo5IjkV8YG_cvEFHQXsd9gLR9buTsqMT-m3CHatHB-zXnJdhBlkvD7gHQoO1RTUYo0Z0J9zg=w2400",
        img_3 : "https://lh3.googleusercontent.com/W03Nq1MaGZuIi1-FV2-r0JhVG8JcAMT5u-Lje2VXi3IIzBV6mRo1roPffd-Rlc9pIfRVFG1n6Lnna79IxL5KF2TdkWXR9ErNWAPDpYA5Mt-9MdKi16BWY-7RB5aJ4HBTtL0EgXQ12w=w2400",
        img_4 : "https://lh3.googleusercontent.com/94C4fQXKTs49FaNEvWgVGD51V9H9mdaMiOcmwHjbpQoyYhtyYtoduB4R5fA40-nT6R6wvGhee7ks1zK5iIlv--64OCgcx5QlIMrkE_JZa169bJj4Q03qiJPEC5H_wg5flEyfW-a-DA=w2400",
        img_5 : "https://lh3.googleusercontent.com/sEd6scnAC7QzqhL8jJWy_Tnntq2gdF3_EafDoZgTUWjTrKuFQ4NXQISxGgS0EMNczgDo5IjkV8YG_cvEFHQXsd9gLR9buTsqMT-m3CHatHB-zXnJdhBlkvD7gHQoO1RTUYo0Z0J9zg=w2400"
    },
]

const HomePortfolio = () => {
    return (
        <section className="py-5 text-white text-center">
            <div className="container">
                <h2 className="fs-30 fw-200 my-5">Featured <span className="font-weight-bold text-white">Portfolio</span></h2>
                <div className="row mb-3">
                   {
                       portfolioData.map(item => <HomePortfolioItem item={item}></HomePortfolioItem>)
                   }
                </div>
                <Link to="/portfolio"><button className="btn btn-warning">View More</button></Link>
            </div>
        </section>
    );
};

export default HomePortfolio;