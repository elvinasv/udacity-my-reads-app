import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import * as BooksAPI from '../api/BooksAPI';

// http://davidwalsh.name/javascript-debounce-function
function debounce(func, wait) {
    let timeout;
    return function () {
        const context = this;
        // eslint-disable-next-line prefer-rest-params
        const args = arguments;
        const later = function () {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

class SearchForBook extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearchUpdate = this.handleSearchUpdate.bind(this);
        this.searchBooksByQuery = debounce(this.searchBooksByQuery, 300);

        this.state = {
            searchedBooks: [],
            searchQuery: '',
        };
    }

    handleSearchUpdate(searchQuery) {
        this.setState(() => ({ searchQuery: searchQuery }));

        if (searchQuery) {
            this.searchBooksByQuery(searchQuery);
        } else {
            this.setState(() => ({ searchedBooks: [] }));
        }
    }

    searchBooksByQuery(searchQuery) {
        BooksAPI.search(searchQuery?.trim?.())
            .then((data) => {
                this.updateBookList(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    updateBookList(availableBooks) {
        const { selectedBooks } = this.props;

        if (availableBooks?.error || !this.state.searchQuery) {
            this.setState(() => ({
                searchedBooks: [],
            }));
            return;
        }

        const amendedNewBooks = availableBooks?.reduce(
            (accumulator, newBook) => {
                const existingBook = selectedBooks?.filter(
                    (selectedBook) => selectedBook.id === newBook.id
                );

                return accumulator.concat(existingBook[0] || newBook);
            },
            []
        );

        this.setState(() => ({
            searchedBooks: amendedNewBooks,
        }));
    }

    render() {
        return (
            <div className="search-books">
                <SearchBar onChange={this.handleSearchUpdate} />
                <SearchResult
                    books={this.state.searchedBooks}
                    onBookShelfChange={this.props.onBookShelfChange}
                />
            </div>
        );
    }
}

SearchForBook.propTypes = {
    selectedBooks: PropTypes.arrayOf(PropTypes.object),
    onBookShelfChange: PropTypes.func,
};

export default SearchForBook;
