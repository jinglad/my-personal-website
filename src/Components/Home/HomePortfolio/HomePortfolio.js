import React from "react";
import { Link } from "react-router-dom";
import HomePortfolioItem from "../HomePorfolioitem/HomePortfolioItem";

export const portfolioData = [
  {
    title: "Amazon Clone",
    shortDescription:
      "This is an ecommerce website where user can find many products and can add the products to cart or remove those from cart",
    description: `This is a (React + firebase) project. It is an ecommerce website. Where users can browse
        different products and choose some products and can add it to cart and also remove the product from cart.Has user authentication. This is simple authentication built with firebase (email+password) authentication.Users can add products to cart and check all the products in the checkout page and also can see the total amount to pay for their shopping.`,
    technologies:
      "ReactJs, Firebase authentication, React Router, Material UI, React Currency Format,React Context API, Styled Component",
    website: "https://clone-2ccbe.web.app/",
    client_side_code: "https://github.com/jinglad/amazon-clone-react",
    server_side_code: "",
    img_1: "https://iili.io/R5coXa.png",
    img_2: "https://iili.io/R5cW22.png",
    img_3: "https://iili.io/R5cOhu.png",
    img_4: "https://iili.io/R5ceLb.png",
  },
  {
    title: "Creative Agency",
    shortDescription:
      "This is an agency website where user can find many services and can order a particular service.",
    description:
      "Creative Agency is MERN project. User can find many services and can order any of the services. User can login and order any of the services. User can also give feedback. User can see all of their ordered services. Admin can manage the websites from admin panel. Admin can see all users ordered services. Admin can add new services. Admin can remove services. This website has user authentication. Without authentication user cannot have the access to go to service order page and cannot see the ordered services also cannot give feedback. User don't have the access of the admin panel.",
    technologies:
      "ReactJs, MongoDB, Node.js, Express.js, Bootstrap, Firebase, Heroku,React-hook-form,React-Router",
    website: "https://creative-agency-f57e2.web.app",
    client_side_code: "https://github.com/jinglad/creative-agency-client",
    server_side_code: "https://github.com/jinglad/creative-agenct-backend",
    img_1: "https://iili.io/R5cRdN.png",
    img_2: "https://iili.io/R5cRdN.png",
    img_3: "https://iili.io/R5cRdN.png",
    img_4: "https://iili.io/R5cRdN.png",
  },
  {
    title: "Covid-Tracker",
    shortDescription:
      "This is a Covid-19 tracker website where users can see the statistics of covid around the world.",
    description:
      "React Project. This is a Covid-19 tracker website where users can see the statistics of covid around the world. Users can see the total cases, death cases, recovery cases, new cases.Users can choose any country and see the result on the chart and map.",
    technologies: "ReactJs, Firebase, Material UI, ChartJS, Leaflet, Numeral",
    website: "https://covid-tracker-3bc12.web.app/",
    client_side_code: "https://github.com/jinglad/covid-tracker",
    server_side_code: "",
    img_1: "https://iili.io/R5cxLJ.png",
    img_2: "https://iili.io/R5cxLJ.png",
    img_3: "https://iili.io/R5cxLJ.png",
    img_4: "https://iili.io/R5cxLJ.png",
  },
];

const HomePortfolio = () => {
  return (
    <section className="py-5 text-white text-center">
      <div className="container">
        <h2 className="fs-30 fw-200 my-5">
          Featured{" "}
          <span className="font-weight-bold text-white">Portfolio</span>
        </h2>
        <div className="row mb-3">
          {portfolioData.map((item) => (
            <HomePortfolioItem item={item}></HomePortfolioItem>
          ))}
        </div>
        <Link to="/portfolio">
          <button className="btn btn-warning">View More</button>
        </Link>
      </div>
    </section>
  );
};

export default HomePortfolio;
