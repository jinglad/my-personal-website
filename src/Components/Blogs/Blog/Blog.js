import React from 'react';
import { Link } from 'react-router-dom';

const Blog = (props) => {

    const {title,link} = props.blog;

    return (
        <div style={{padding:"20px 15px", boxShadow:"0 0 15px gray",borderRadius:"15px"}} className="col mt-5"> 
            <a className="text-decoration-none text-white" href={link}><h1>{title}</h1></a>
            <p className="text-uppercase color-1">Click on the title to read</p>
        </div>
    );
};

export default Blog;