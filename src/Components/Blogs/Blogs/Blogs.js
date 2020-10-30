import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import Blog from '../Blog/Blog';

const blogsData = [
    {
        title : "Some Html Interview Questions",
        link : "https://medium.com/@jihanchowdhury70/some-html-interview-questions-a97e48fbb02f",
    }
]

const Blogs = () => {
    return (
        <div className="container">
            <Navbar></Navbar>
            <h1 className="my-5 text-center text-white">Read my blog published on <a className="text-decoration-none text-warning" href="https://medium.com/@jihanchowdhury70">medium.com</a></h1>
            <div className="row">
                {
                    blogsData.map(blog => <Blog blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;