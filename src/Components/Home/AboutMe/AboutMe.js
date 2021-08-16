import React from "react";
import { Link } from "react-router-dom";
import myPic from "../../../image/myPic.png";

const AboutMe = () => {
  return (
    <section id="about" className="py-5 mt-5 mb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 pr-5">
            <img src={myPic} alt="" className="w-100 img-fluid" />
          </div>
          <div className="col-lg-5 pl-5">
            <h3 className="text-white mb-30 fs-30 fw-200">
              About <span className="font-weight-bold text-white">Me</span>
            </h3>
            <p
              className="color-1"
              style={{ fontFamily: "'Noto Sans', sans-serif" }}
            >
              I am skilled in web development, web designing, and making
              websites using WordPress.I can make any type of website, be it an
              e-commerce website, a business website, a promotional website, a
              blog, etc.
            </p>
            <p
              className="color-1 mb-5 mt-3"
              style={{ fontFamily: "'Noto Sans', sans-serif" }}
            >
              My passion for web development started a few years ago. I am a
              Computer Science student currently and the web development sector
              of Computer Science has always fascinated me. I can spend hours on
              end learning how to code, design webpages, applying new innovative
              ideas to my older projects. It interests me so much so that I can
              now say web works are one of my favorite pastimes. I am pretty
              sure I am on the right path with this.
            </p>
            <Link to="/contact-me" className="btn btn-warning mr-2">
              Hire Me
            </Link>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1UZuM4RjUmLMNS9eqyeSiSOC02tR1nicv/view?usp=sharing"
              className="btn btn-primary"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
