import React, { createContext, useState, useCallback } from "react";
import axios from "axios";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // 🔎 Search books by query
  const searchBooks = useCallback(async (query) => {
    try {
      setLoading(true);
      setError("");
      setSearchTerm(query);

      const res = await axios.get(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
      );

      setBooks(res.data.docs || []);
    } catch (err) {
      setError("Failed to fetch search results.");
    } finally {
      setLoading(false);
    }
  }, []);

  // 🎲 Fetch random "fiction" books with random offset
  const fetchRandomBooks = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      setSearchTerm("");


      const randomOffset = Math.floor(Math.random() * 1000);

      const res = await axios.get(
        `https://openlibrary.org/subjects/fiction.json?limit=50&offset=${randomOffset}`
      );

      const normalizedBooks = (res.data.works || []).map((work) => ({
        key: work.key,
        title: work.title,
        author_name: work.authors ? work.authors.map((a) => a.name) : ["Unknown"],
        first_publish_year: work.first_publish_year,
        cover_i: work.cover_id,
        language: work.language || ["N/A"],
      }));

      setBooks(normalizedBooks);
    } catch (err) {
      setError("Failed to fetch random books.");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <BookContext.Provider
      value={{
        books,
        loading,
        error,
        searchTerm,
        searchBooks,
        fetchRandomBooks,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
