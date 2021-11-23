/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

const WANT_TO_READ = 'wantToRead';
const READ = 'read';
const CURRENTLY_READING = 'currentlyReading';

const filterBookByShelf = (allBooks, shelfName) =>
    allBooks?.filter((book) => book?.shelf === shelfName);
class BookList extends React.Component {
    render() {
        const { books, onBookShelfChange: passedOnBookShelfChange } =
            this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Library</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf
                            title="Read"
                            books={filterBookByShelf(books, READ)}
                            onBookShelfChange={passedOnBookShelfChange}
                        />
                        <BookShelf
                            title="Want to Read"
                            books={filterBookByShelf(books, WANT_TO_READ)}
                            onBookShelfChange={passedOnBookShelfChange}
                        />
                        <BookShelf
                            title="Currently Reading"
                            books={filterBookByShelf(books, CURRENTLY_READING)}
                            onBookShelfChange={passedOnBookShelfChange}
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

BookList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object),
    onBookShelfChange: PropTypes.func,
};

export default BookList;
