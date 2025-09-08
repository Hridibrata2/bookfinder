import React, { useContext, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import { HiArrowNarrowLeft } from "react-icons/hi";
import SearchBar from "../components/SearchBar";
import "../styles/SearchResults.css";
import BookList from "../components/BookList";

const SearchResults = () => {
  const { query } = useParams();
  const { books, loading, error, searchBooks } = useContext(BookContext);
  const navigate = useNavigate();

  
  useEffect(() => {
    if (query) {
      searchBooks(query);
    }
  }, [query, searchBooks]); 

  return (
    <div>
<Link className="back_button" onClick={() => navigate(-1)}>
  <HiArrowNarrowLeft />
</Link>
      <SearchBar />
      <BookList
        books={books || []}
        loading={loading || false}
        error={error || ""}
        title={query ? `Results for "${query}"` : "Search Results"}
      />
    </div>
  );
};

export default SearchResults;
