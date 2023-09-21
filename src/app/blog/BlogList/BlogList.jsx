import React, { useEffect, useState } from "react";
import BlogCard from "../BlogCard/BlogCard";
import noResult from "../../../assets/animation_lmrh0wcb.json";
import Lottie from "lottie-react";
import Pagination from "../Pagination/Pagination";

const BlogList = ({ searchText }) => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      let url;
      if (searchText) {
        // If search text fetch based on the search
        url = `https://weather-cast-server.vercel.app/searchBlog/${searchText}?page=${currentPage}&perPage=${itemsPerPage}`;
      } else {
        // by default fetch all blogs if no search
        url = `https://weather-cast-server.vercel.app/blogs?page=${currentPage}&perPage=${itemsPerPage}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
      if (searchText) {
        setTotalResults(data.length);
      }
    };

    fetchData();
  }, [currentPage, searchText]);

  const totalPages = Math.ceil(19 / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      {searchText && totalResults > 0 && (
        <p className="mt-6 text-center text-blue-800 font-bold">
          {totalResults} result(s) found
        </p>
      )}
      {totalResults === 0 && searchText && searchText && (
        <div className="flex mx-auto mt-6 w-96">
          <Lottie animationData={noResult}></Lottie>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 mt-10">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default BlogList;
