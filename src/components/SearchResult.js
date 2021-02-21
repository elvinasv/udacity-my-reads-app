import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const SearchResult = ({ books }) => (
  <div className="search-books-results">
    {!books.length && <h2>No books found. Please enter the a new query</h2>}
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
