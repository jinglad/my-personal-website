import React from 'react';
import { Link } from 'react-router-dom';
import HomePortfolioItem from '../HomePorfolioitem/HomePortfolioItem';

const portfolioData = [
    {
        title: "Volunteer Network",
        shortDescription: "This is a volunteer registration website where user can find many events and can register for a particular event.",
        description: "Volunteer Network is a MERN project. In this website user can find many events and register for any of the events as a volunteer.User can register as many events as they want to attend as a volunteer.User can also see their register events on the event page. User can manage their registered events. Like they can cancel any registered event when they want.This website have user authentication. User have to login for register event. Without login they can't have the access to go to the registration page.Admin can see all users registered events.Admin can cancel registered events and can also add new events",
        technologies: "ReactJs, MongoDB, Node.js, Express.js, Bootstrap, Firebase, Heroku,React-hook-form,React-Router",
        website: "https://volunteer-network-a49e7.web.app",
        client_side_code: "https://github.com/jinglad/volunteer-network-client",
        server_side_code: "https://github.com/jinglad/volunteer-server-01",
        img_1: "https://lh3.googleusercontent.com/wI49rUZyRAQ3QezERLT1OGm0fi-10n85i4p6FfaD_MfKZQdheZh_op2i9YTIJdVN8oF20VZQx59yNgynFN5LsTfi13yb0Pd9JLUEc2MpAjfPFf9s3ZCmXMI7OiQfRIoOpCKocXgMzw=w2400",
        img_2: "https://lh3.googleusercontent.com/gkHM3OQ5l2e1kgRC4z6BHu4hj4ZA5Ac8nBA_UJK8M-kuHKvfUdNYgLh4IVqe2ComU5itLjfBjUo3ZGXFJybeMEdkGInOr7oc9gC74fKqjgXDwBJY3bDJRXPJ_MCHQmvK59i-bSs_8A=w2400",
        img_3: "https://lh3.googleusercontent.com/BoswlOamH0F9qp3ErLLe0sOEMECcA7YJF64HMBiPqichICmAES2eD_V9b_YfmwmPEtfd0PmAsosbyBoHuSIV8Y3QNfV-KlWrTIdKB4ppOsAdyEoP6FEnCSdDcgtttquUWEmSy9igsA=w2400",
        img_4: "https://lh3.googleusercontent.com/v-1BLTZ8fhLYZqteA1sB87J3PE7cH57qkfXAh9gkUIJ0SzRZaO2QeE66DKqZgfvkqgTH60ZoSGg-paDjQHU35BfrnpxJPyck7D_TylAjSRfhDwh-NyDn8bx1NA94nOMlzL2HXoPyBg=w2400"
    },
    {
        title: "Creative Agency",
        shortDescription: "This is an agency website where user can find many services and can order a particular service.",
        description: "Creative Agency is MERN project. User can find many services and can order any of the services. User can login and order any of the services. User can also give feedback. User can see all of their ordered services. Admin can manage the websites from admin panel. Admin can see all users ordered services. Admin can add new services. Admin can remove services. This website has user authentication. Without authentication user cannot have the access to go to service order page and cannot see the ordered services also cannot give feedback. User don't have the access of the admin panel.",
        technologies: "ReactJs, MongoDB, Node.js, Express.js, Bootstrap, Firebase, Heroku,React-hook-form,React-Router",
        website: "https://creative-agency-f57e2.web.app",
        client_side_code: "https://github.com/jinglad/creative-agency-client",
        server_side_code: "https://github.com/jinglad/creative-agenct-backend",
        img_1: "https://lh3.googleusercontent.com/vhGG0LexqmAfTf82-wzRZ-h91JBLmXag4NfOzrCJ8X3h4fgr3NtlUUZHZCi5A8OsOe7meeOfFMAGmDCo8s0lQw75RihNjOkF4RKHTrps6KE3mNE4LiE5cpeWZqO5IiDpzVkunbUqwQ=w2400",
        img_2: "https://lh3.googleusercontent.com/EC1tUs7FzaIx_cGsM1bFrMQ80dZGorx2nNEL-nA00MNnYuhAnmDRawO202ZhyK8lz6EA7k-xb8odElNRIQy3DsHPAmG9vCDL4Yy1JZ7dm9JM6nk7zmTizejIG2zRcbCXS3b8-bkvbw=w2400",
        img_3: "https://lh3.googleusercontent.com/5K2aiLQOZqyHgxFUO657z6jYlLLFbGzBk-jZR9wuDHE9uUqsqN7DG5fsaoK4baW2DikFREELGcmwPYsMo0xMCbAgLqZGpBlW15ZjLk_4276KzwJ5Gp4DSQEm1gXLwkphD7jxFuUXtw=w2400",
        img_4: "https://lh3.googleusercontent.com/FVSYfv1ce0bLBQgV8uRy2JIPGZ_sd9JANOt9QAjXfupKOiIFwxgAaQRDY0RIHvGkLd2RqqoFeFsIMqeaFINK5vVy1409LgS-5cCBMlYxMUumf9VEENRWcz-M__QY5JMI2tHNcqk94Q=w2400",
    },
    {
        title: "Travel Guru",
        shortDescription: "This is a travel agency website where user can find many places and can book a place for visit.",
        description: "Travel Guru is a ReactJs project. In this Website User can find many tourists places for tour. User can register places for tour. User can also find available hotels in the website and book hotel room. User can find the places through google map. This website have user authentication. User cannot book any date for tour or hotel without login.",
        technologies: "ReactJs, Bootstrap, Firebase, Google Map, React-Router",
        website: "https://travel-guru-3adb2.web.app",
        client_side_code: "https://github.com/jinglad/travel-guru-app-09",
        server_side_code: "",
        img_1: "https://lh3.googleusercontent.com/ppI-LovU6t9fFUMvmgFNiQA8MuH-4oW-haAGjZ7xj8YlZLV6LwAYLlLKNPJYNfsOQM9Y1bfTxiRiJpAoDnkkgxKWXPkzpQtkaCpwR3MtRnCgF7VCq7Qx31Np6FFoydhLGVG8m12dRA=w2400",
        img_2: "https://lh3.googleusercontent.com/NG_iohBqdhpwlth53RXteR40cRrFUOUl1LdERwXOGx87J-ED-qAYJxbI1CnmFtg5UXQ623iw38AF9jG1FM3ifAWFy9qqaVdF7eQDLFxTAAZfVgWucPLpB4PwA_IowGNxlbA0YjOyDg=w2400",
        img_3: "https://lh3.googleusercontent.com/TwrJY8X10xeq774WCA70L70LJ1goQ1byKvYw2Us4QOcbttRKb1MKnC0K_VOg3IjOJZ-GGBO3w_TuirQZ8cJqEI7F_rKuct3YX41h7XBfAUb9JfTEDl7vPFyYs0zHcWYtB7ZTr-izSw=w2400",
        img_4: "https://lh3.googleusercontent.com/85z7pqrDGHW1xBdfXXaCEsDpyvgs154Dc5RCa2gP-lhAl0ZN7NnhBV6_V1NzGxBq4VxiztszlCPJSC8-SHmoXMW4TLYr-LWmoUe9oRJdHawVLOd0XxzJd1U-5bjby_KixijkO4e3UQ=w2400",
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