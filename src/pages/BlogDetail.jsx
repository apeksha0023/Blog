import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "../styles/BlogDetail.css";

const BlogDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(location.state?.blog || null);

  useEffect(() => {
    if (!blog) {
      fetch(`https://dummyjson.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => setBlog(data))
        .catch(() => navigate("/blogs")); // If blog not found, go back
    }
  }, [id, blog, navigate]);

  if (!blog) return <h2>Loading...</h2>;

  return (
    <div className="blog-detail-container">
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
      <button className="back-button" onClick={() => navigate("/blogs")}>
        ⬅ Back to Blogs
      </button>
    </div>
  );
};

export default BlogDetail;
