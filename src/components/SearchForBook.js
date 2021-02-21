import React from 'react';
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
    };
  }

  handleSearchUpdate(searchQuery) {
    if (searchQuery) {
      this.searchBooksByQuery(searchQuery);
    } else {
      this.setState(() => ({
        searchedBooks: [],
      }));
    }
  }

  searchBooksByQuery(searchQuery) {
    BooksAPI.search(searchQuery)
      .then((data) => {
        this.setState(() => ({
          searchedBooks: data?.error ? [] : data,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="search-books">
        <SearchBar onChange={this.handleSearchUpdate} />
        <SearchResult books={this.state.searchedBooks} />
      </div>
    );
  }
}

export default SearchForBook;
