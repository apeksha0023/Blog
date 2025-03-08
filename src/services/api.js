


export const fetchBlogs = async () => {
  try {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    return data.posts.map((blog, index) => ({
      ...blog,
      image: `https://picsum.photos/400/300?random=${index}`,  // Random image
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};
