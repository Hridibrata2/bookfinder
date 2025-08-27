import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'
import Loader from './Loader';
import BookCard from './Bookcard'
import '../styles/BookList.css';

const BookList = () => {
  const { books, loading, error, searchTerm } = useContext(BookContext);

  if (loading) return <Loader />;
  if (error) return <p className="error_message">{error}</p>;
  if (books.length === 0) return <p className="no_results">No books found.</p>;

  return (
    <div className="booklist_wrapper">
      <h2 className="booklist_heading">
        {searchTerm.trim() === '' ? 'Popular Books' : 'Results'}
      </h2>
    <div className="booklist_container">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
    </div>
  );
};

export default BookList;
