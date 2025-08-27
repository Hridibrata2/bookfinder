import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'
import Loader from './Loading';
import BookCard from './Bookcard'
import '../styles/BookList.css';

const BookList = () => {
  const { books, loading, error } = useContext(BookContext);

  if (loading) return <Loader />;
  if (error) return <p className="error_message">{error}</p>;
  if (books.length === 0) return <p className="no_results">No books found.</p>;

  return (
    <div className="booklist_container">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
};

export default BookList;
