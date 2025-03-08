import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "./components/BlogCard";
import { fetchBlogs } from "./services/api";
import "./styles/App.css";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs().then((data) => setBlogs(data.slice(0, 4))); // Display 3 blogs on the landing page
  }, []);

  return (
    <div className="app-container">
      <h1>Welcome to the Blog & Contact App</h1>
      <nav>
        <ul>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
      <div className="featured-blogs">
        <h2>Latest Blogs</h2>
        <div className="blog-cards-container">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;