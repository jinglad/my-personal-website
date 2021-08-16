import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HomePortfolio from "../HomePortfolio/HomePortfolio";

const Home = () => {
  return (
    <div style={{ fontFamily: "'Noto Sans', sans-serif" }}>
      <Header></Header>
      <main>
        <HomePortfolio></HomePortfolio>
        <AboutMe></AboutMe>
        <Footer></Footer>
      </main>
    </div>
  );
};

export default Home;
