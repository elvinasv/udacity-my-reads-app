import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

const BookItem = ({ book }) => {
  const authorName = book.authors?.join?.('; ');
  const backgroundImageUrl = book.imageLinks?.thumbnail;

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 192,
            backgroundImage: `url(${backgroundImageUrl}`,
          }}
        />
        <BookShelfChanger currentShelf={book.shelf} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{authorName}</div>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.string),
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string,
    }),
    shelf: PropTypes.string,
  }),
};

export default BookItem;
