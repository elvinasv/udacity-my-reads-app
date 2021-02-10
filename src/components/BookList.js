/* eslint-disable react/no-unused-state */
import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import * as BooksAPI from '../api/BooksAPI';

const WANT_TO_READ = 'wantToRead';
const READ = 'read';
const CURRENTLY_READING = 'currentlyReading';

const filterBookByShelf = (allBooks, shelfName) =>
  allBooks?.filter((book) => book?.shelf === shelfName);
class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((data) => {
        this.setState(() => ({
          books: data,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { books } = this.state;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Library</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf title="Read" books={filterBookByShelf(books, READ)} />
            <BookShelf
              title="Want to Read"
              books={filterBookByShelf(books, WANT_TO_READ)}
            />
            <BookShelf
              title="Currently Reading"
              books={filterBookByShelf(books, CURRENTLY_READING)}
            />
          </div>
        </div>
        <Link to="/search">
          <div className="open-search">
            <button type="submit">Add a book</button>
          </div>
        </Link>
      </div>
    );
  }
}

export default BookList;
