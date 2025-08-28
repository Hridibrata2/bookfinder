import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import "../styles/Searchbar.css";

const SearchBar = () => {
  const [book, setBook] = useState("");
  const { searchBooks } = useContext(BookContext);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (book.trim() === "") {
        alert("Please enter a name");
      } else {
        searchBooks(book.trim());
      }
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
