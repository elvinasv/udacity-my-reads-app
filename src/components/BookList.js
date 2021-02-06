import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

const BookList = () => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>My Library</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf title="Read" />
        <BookShelf title="Want to Read" />
        <BookShelf title="Currently Reading" />
      </div>
    </div>
    <Link to="/search">
      <div className="open-search">
        <button type="submit">Add a book</button>
      </div>
    </Link>
  </div>
);

export default BookList;
