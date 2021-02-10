/* eslint-disable react/prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import BookItem from './BookItem';

const BookShelf = ({ title = BookShelf, books }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books?.map((book) => (
          <li key={book.id}>
            <BookItem book={book} />
          </li>
        ))}
      </ol>
    </div>
  </div>
);

BookShelf.propTypes = {
  title: PropTypes.string,
  books: PropTypes.arrayOf(PropTypes.object),
};

export default BookShelf;
