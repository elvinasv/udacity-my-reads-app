import React from 'react';
import { PropTypes } from 'prop-types';
import BookItem from './BookItem';

const BookShelf = ({ title = BookShelf }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        <li>
          <BookItem />
        </li>
        <li>
          <BookItem />
        </li>
        <li />
      </ol>
    </div>
  </div>
);

BookShelf.propTypes = {
  title: PropTypes.string,
};

export default BookShelf;
