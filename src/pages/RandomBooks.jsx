import React, { useContext, useEffect } from "react";
import { BookContext } from "../context/BookContext";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";

const RandomBooks = () => {
  const { books, loading, error, fetchRandomBooks } = useContext(BookContext);

  useEffect(() => {
    if (fetchRandomBooks) {
      fetchRandomBooks();
    } else {
      console.error("❌ fetchRandomBooks is missing in BookContext");
    }
  }, [fetchRandomBooks]);

  
  if (!books && !loading && !error) {
    return <p>⚠️ BookContext is not providing data correctly.</p>;
  }

  return (
    <div>
      <SearchBar />
      <BookList
        books={books || []}
        loading={loading || false}
        error={error || ""}
        title="Popular Books"
      />
    </div>
  );
};

export default RandomBooks;
