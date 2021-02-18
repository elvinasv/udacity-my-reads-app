import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const SearchResult = ({ books }) => (
  <div className="search-books-results">
    <ol className="books-grid">
      {books?.map((book) => (
        <li key={book.id}>
          <BookItem book={book} />
        </li>
      ))}
    </ol>
  </div>
);

SearchResult.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

export default SearchResult;
