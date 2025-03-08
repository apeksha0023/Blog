// import React from "react";
// import "../styles/BlogCard.css";

// const BlogCard = ({ blog }) => {
//   return (
//     <div className="blog-card">
//       <h3>{blog.title}</h3>
//       <p>{blog.body}</p>
//     </div>
//   );
// };

// export default BlogCard;



import React from "react";
import {  useNavigate } from "react-router-dom";
import "../styles/BlogCard.css";
import { SiBloglovin } from "react-icons/si";

const BlogCard = ({ blog,icon }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blogs/${blog.id}`, { state: { blog } });  // ✅ Pass full blog data

  };

  return (
    <div className="blog-card">
       <div className="blog-icon">{icon || <SiBloglovin/>}</div>
      <div className="blog-content">
        <h3>{blog.title}</h3>
        <p>{blog.body.substring(0, 100)}...</p>
    <button className="read-more" onClick={handleReadMore}>Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;
