/* eslint-disable react/prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import BookItem from './BookItem';

const BookShelf = ({
  title = BookShelf,
  books,
  onBookShelfChange: passedBokShelfChange,
}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books?.map((book) => (
          <li key={book.id}>
            <BookItem book={book} onBookShelfChange={passedBokShelfChange} />
          </li>
        ))}
      </ol>
    </div>
  </div>
);

BookShelf.propTypes = {
  title: PropTypes.string,
  books: PropTypes.arrayOf(PropTypes.object),
  onBookShelfChange: PropTypes.func,
};

export default BookShelf;
