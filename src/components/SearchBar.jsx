import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Searchbar.css";

const SearchBar = () => {
  const [book, setBook] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const query = book.trim();
    if (query === "") return;
    navigate(`/search/${query}`); 
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="header">
      <div className="header_container">
        <h1 className="header_title">VerseVault</h1>
      </div>
      <div className="search_bar">
        <input
          className="search_input"
          type="text"
          placeholder="Search for books"
          value={book}
          onChange={(e) => setBook(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default SearchBar;
