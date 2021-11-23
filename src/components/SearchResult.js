import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const SearchResult = ({
    books,
    onBookShelfChange: passedOnBookShelfChange,
}) => (
    <div className="search-books-results">
        {!books.length && <h2>No books found. Please enter the a new query</h2>}
        <ol className="books-grid">
            {books?.map((book) => (
                <li key={book.id}>
                    <BookItem
                        book={book}
                        onBookShelfChange={passedOnBookShelfChange}
                    />
                </li>
            ))}
        </ol>
    </div>
);

SearchResult.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object),
    onBookShelfChange: PropTypes.func,
};

export default SearchResult;
