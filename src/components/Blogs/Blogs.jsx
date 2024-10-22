import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ( {handleBookMark,handleReadTime} ) => {
    // create state here
    const [blogs,setBlogs] = useState([]);

    // Load data using useEffect
    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    } ,[])

    return (
        <div className='w-2/3'>
           <h3 className="text-3xl mb-3">Blogs:{blogs.length}</h3>
           {
             blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookMark={handleBookMark} handleReadTime={handleReadTime}></Blog>)
           }
        </div>
    );
};


Blogs.propTypes = {
    handleBookMark: PropTypes.func.isRequired,
    handleReadTime: PropTypes.func.isRequired
}
export default Blogs;