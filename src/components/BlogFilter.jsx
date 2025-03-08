import React from "react";
import "../styles/BlogFilter.css"; // Import CSS file

const BlogFilter = ({ search, handleSearch }) => {
  return (
    <div className="blog-filter">
      <input
        type="text"
        className="search-input"
        placeholder="Search blogs..."
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default BlogFilter;
