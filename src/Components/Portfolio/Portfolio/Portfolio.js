import React from "react";
import { portfolioData } from "../../Home/HomePortfolio/HomePortfolio";
import Navbar from "../../Home/Navbar/Navbar";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

const projectsData = portfolioData;

const Portfolio = () => {
  return (
    <div
      className="container text-white"
      style={{ fontFamily: "'Noto Sans', sans-serif" }}
    >
      <Navbar />
      <div className="row mt-5">
        {projectsData.map((item) => (
          <PortfolioItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
