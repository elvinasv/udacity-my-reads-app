import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SearchForBook from './components/SearchForBook';
import BookList from './components/BookList';
import * as BooksAPI from './api/BooksAPI';

class BooksApp extends React.Component {
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
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/search">
              <SearchForBook selectedBooks={this.state.books} />
            </Route>
            <Route path="/">
              <BookList books={this.state.books} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default BooksApp;
