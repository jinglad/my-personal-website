import React from 'react';
import { Link } from 'react-router-dom';
import HomePortfolioItem from '../HomePorfolioitem/HomePortfolioItem';

const portfolioData = [
    {
        title: "Volunteer Network",
        shortDescription : "This is a volunteer registration website where user can find many events and can register for a particular event.",
        description : "Volunteer Network is a MERN project. In this website user can find many events and register for any of the events as a volunteer.User can register as many events as they want to attend as a volunteer.User can also see their register events on the event page. User can manage their registered events. Like they can cancel any registered event when they want.This website have user authentication. User have to login for register event. Without login they can't have the access to go to the registration page.Admin can see all users registered events.Admin can cancel registered events and can also add new events",
        technologies : "ReactJs, MongoDB, Node.js, Express.js, Bootstrap, Firebase, Heroku,React-hook-form,React-Router",
        website : "https://volunteer-network-a49e7.web.app",
        client_side_code : "https://github.com/jinglad/volunteer-network-client",
        server_side_code : "https://github.com/jinglad/volunteer-server-01",
        img_1 : "https://lh3.googleusercontent.com/-BFsZHd1MlTxSy4TbW-QZXIsd5Ksw4pcZtvqwEqRzt1SetsW365D7unZQln8T9_9fVPZ0E-LU2XLLJNPmu1uCLAMVK0qATbrOM1nbKBcFfOV6gF0TMi0srzhiTMimNoGFu_i3pWrng=w2400",
        img_2 : "https://lh3.googleusercontent.com/HqSSYiPSm1NwmJAlBFm1LpjO0j12AaWR1lk3eelGjgPqM_zHqoKvd2xvRZ6HMV2Og_wobO1rEbPQdac6nG8N7wV3aXZvkemOluF40fQjTAqJ7R1pWgxa5GLhtbckfR-qxbIqGW-UKA=w2400",
        img_3 : "https://lh3.googleusercontent.com/mRcEqWA8GnBQwBAkpjHpt6EaqXKshZYSOvue0lmPzjKlgQVWyCE1adxoOmUs1seoZHlsQEgTAEJEZNIe6Xv59Snohr76E0Loekhfv6CBsI0MTJ658MNjf7HlQUS11d_RnBFynDYq7Q=w2400",
        img_4 : "https://lh3.googleusercontent.com/CoKLM_Ebac4szA4ri8lNwrs55XL7dELOPpZ8dPIZMsZTbIdMz1A9FpL_potSCkqPY5FWIc9lwUKn1X5VqhzvQjEgUjjB7T-CG94kiWOR-vIh4kGRwYtxeclkzR-qQo9aTbqApqyigw=w2400",
        img_5 : "https://lh3.googleusercontent.com/vXXm3Vtp9ekf7xrw1U9gaG1d0a57RUjTwiXb41HihbLkGJCichSDaO8ZGDL01B82yce4ibfqav6UWHVKyn1XtyAILJaTcbWPtw3ZpnIhtPPPdjwNu1D4KlsqmNvzhdVcmbjf-OypHQ=w2400"
    },
    {
        title: "Creative Agency",
        shortDescription : "This is an agency website where user can find many services and can order a particular service.",
        description : "Creative Agency is MERN project. User can find many services and can order any of the services. User can login and order any of the services. User can also give feedback. User can see all of their ordered services. Admin can manage the websites from admin panel. Admin can see all users ordered services. Admin can add new services. Admin can remove services. This website has user authentication. Without authentication user cannot have the access to go to service order page and cannot see the ordered services also cannot give feedback. User don't have the access of the admin panel.",
        technologies : "ReactJs, MongoDB, Node.js, Express.js, Bootstrap, Firebase, Heroku,React-hook-form,React-Router",
        website : "https://creative-agency-f57e2.web.app",
        client_side_code : "https://github.com/jinglad/creative-agency-client",
        server_side_code : "https://github.com/jinglad/creative-agenct-backend",
        img_1 : "https://lh3.googleusercontent.com/qD5DQJMhOOvy0nza1YroyitljH-JoPoEzd5-QgMDC3oAv91msBkEKNnHWqv4qntdwTBRhVyxS0xSh3cu-my7awLStDdbj_dJjOp0xN0-8cvMWZdGnPaOTl4TuJvnzzUWIscs_y9cFA=w2400",
        img_2 : "https://lh3.googleusercontent.com/cQRRxHXHuW5ELQW9FcjvJ6Ybsp-4-CXHFS5FIPICc0YCg8S939AQEsRXZ6uPcAvjK1zzzXza4kxu7uizmxJqi0mKujK7YJ1kuw4Km9p_R4OdKJhWXstxa5ubVEk7jVAgdDQB5HTrQQ=w2400",
        img_3 : "https://lh3.googleusercontent.com/k1n1h5G98wqyUIEd65jQfCzds4dPPvGQbPjc4d-bCwWWrjwEtxwUVCs7WEf0LVNF5E4HQ4ukz-cQlbh_BxR39WK5wf20--YiLqkcbh697bEu6lIn-aGHlr8_yDvW7MMAgZQ9ltRkZA=w2400",
        img_4 : "https://lh3.googleusercontent.com/EZ1jhfEb1TL4y9duf7zL8NAG1fhuWp-qofb-yY7vA7qfB5D2av6J_-_bK_G62Voi5TBTaMBUGIckkQ_-M2yF2w3GidtccZWnRhMLSFsSMHJRgb81_PDt9FrnzHKgHlhuNKuSmy8nlg=w2400",
        img_5 : "https://lh3.googleusercontent.com/A-GkpOkCh7NFCu0HlcejO215EnbIHK7x4-XmB5etL1LxuDudvL0ttnCzwTb9qxLGP54o0RogqQftP3o4IdGCz0PhGmOsulNyyWrmNYEaRG5KMM9-AS4gqpAS9NdlC7sWvL-QmXU2tA=w2400"
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