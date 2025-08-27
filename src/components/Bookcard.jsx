import React from 'react';
import '../styles/Bookcard.css';

const BookCard = ({ book }) => {
  const {
    title,
    author_name,
    first_publish_year,
    subtitle,
    language,
    cover_i,
  } = book;

  const coverUrl = cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`
    : 'https://placehold.co/150x220?text=No+Cover';

  return (
    <div className='book_card'>
      <img
        className='book_cover'
        src={coverUrl}
        alt={`Cover of ${title || 'Untitled'}`}
      />
      <div className='book_title'>{title || 'Untitled'}</div>
      <div className='book_details'>
        <p><strong>Author:</strong> {author_name?.join(', ') || 'Unknown'}</p>
        <p><strong>Published:</strong> {first_publish_year || 'N/A'}</p>
        <p><strong>Subtitle:</strong> {subtitle || 'N/A'}</p>
        <p><strong>Language:</strong> {language?.join(', ') || 'N/A'}</p>
      </div>
    </div>
  );
};

export default BookCard;