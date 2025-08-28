import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const shuffleArray = (array) =>
    array
      .map(item => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);

  
  useEffect(() => {
    const fetchRandomBooks = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await axios.get('https://openlibrary.org/search.json?q={random}');
        const data = res.data;
        const shuffle = shuffleArray(data.docs || []);
        setBooks(shuffle.slice(0, 20)); 
      } catch (err) {
        setError('Failed to fetch random books.');
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomBooks();
  }, []);

  const searchBooks = async (query) => {
    if (!query) return;
    setLoading(true);
    setError('');
    setSearchTerm(query);

    try {
      const res = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
      const data = res.data;
      setBooks(data.docs.length > 0 ? data.docs.slice(0, 20) : []);
    } catch (err) {
      setError('Failed to fetch books. Try again.');
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BookContext.Provider value={{ books, loading, error, searchTerm, searchBooks }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;