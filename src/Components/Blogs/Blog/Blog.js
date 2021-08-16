import React from "react";
import { Link } from "react-router-dom";

const Blog = (props) => {
  const { title, link } = props.blog;

  return (
    <div
      style={{
        padding: "20px 15px",
        boxShadow: "0 0 15px gray",
        borderRadius: "15px",
      }}
      className="d-flex flex-column justify-content-between mt-5 mb-5"
    >
      <a
        className="text-decoration-none text-white"
        href={link}
        target="_blank"
      >
        <h1>{title}</h1>
      </a>
    </div>
  );
};

export default Blog;
