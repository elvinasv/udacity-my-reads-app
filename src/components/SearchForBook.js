import React from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import * as BooksAPI from '../api/BooksAPI';

class SearchForBook extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchUpdate = this.handleSearchUpdate.bind(this);
    this.searchBooksByQuery = this.searchBooksByQuery.bind(this);

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
