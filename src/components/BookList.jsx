import React, { useContext, useState, useEffect } from 'react';
import { BookContext } from '../context/BookContext';
import Loader from './Loader';
import BookCard from './Bookcard';
import '../styles/BookList.css';

const BookList = () => {
  const { books, loading, error, searchTerm } = useContext(BookContext);
  const [page, setPage] = useState(1);
  const booksPerPage = 10;

  
  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  const totalPages = Math.ceil(books.length / booksPerPage);
  const startIndex = (page - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const booksToShow = books.slice(startIndex, endIndex);

  if (loading) return <Loader />;
  if (error) return <p className="error_message">{error}</p>;
  if (books.length === 0) return <p className="no_results">No books found.</p>;

  return (
    <div className="booklist_wrapper">
      <h2 className="booklist_heading">
        {searchTerm.trim() === '' ? 'Popular Books' : 'Results'}
      </h2>

      <div className="booklist_container">
        {booksToShow.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>

      <div className="pagination_controls">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default BookList;