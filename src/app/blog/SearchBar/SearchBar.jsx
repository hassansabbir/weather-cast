import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };
  const handleSearch = () => {
    onSearch(searchText);
  };
  return (
    <div>
      <div className="flex items-center justify-center mt-5 bg-blue-400 rounded">
        <div className="rounded-lg p-4 sm:p-8 w-full sm:w-2/4">
          <div className="flex">
            <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-3 sm:p-5">
              <FaSearch className="pointer-events-none absolute w-5 fill-gray-500 transition"></FaSearch>
            </div>
            <input
              type="text"
              className="w-full h-14 bg-white pl-2 text-base font-semibold outline-0"
              placeholder="Search blog ..."
              onChange={handleInputChange}
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
