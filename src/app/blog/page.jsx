"use client";
import React from "react";
import RecentBlog from "./RecentBlog/RecentBlog";
import SearchBar from "./SearchBar/SearchBar";
import BlogList from "./BlogList/BlogList";
import { useState } from "react";

const Blog = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (searchText) => {
    setSearchText(searchText);
  };
  return (
    <div className="my-10 max-w-[1460px] mx-auto">
      <RecentBlog></RecentBlog>
      <SearchBar onSearch={handleSearch}></SearchBar>
      <BlogList searchText={searchText}></BlogList>
    </div>
  );
};

export default Blog;
