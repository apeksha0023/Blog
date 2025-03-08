




import React, { useEffect, useState, useMemo, useCallback } from "react";
import BlogCard from "../components/BlogCard";
import BlogFilter from "../components/BlogFilter";
import "../styles/BlogList.css";
import { FaArrowLeft, FaArrowRight, FaRegFileAlt } from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        setBlogs(data.posts);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, blogs]);

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <div className="blog-list-container">
 <h1><Link to="/" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
    Blog List
  </Link></h1>
      <BlogFilter search={search} handleSearch={handleSearch} />
      <div className="blog-grid">
        {currentBlogs.length > 0 ? (
          currentBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={{...blog, image: undefined}} icon={<SiBloglovin/>}  />
          ))
        ) : (
          <p>No blogs found.</p>
        )}
      </div>
      <div className="pagination">
        <button
          className="page-btn"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <FaArrowLeft /> Prev
        </button>
        <span className="page-info">Page {currentPage} of {totalPages}</span>
        <button
          className="page-btn"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next <FaArrowRight />
        </button>
      </div>
     
    </div>
  );
};

export default BlogList;
