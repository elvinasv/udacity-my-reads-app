import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import SearchForBook from './SearchForBook';
import BookList from './BookList';

class BooksApp extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/search">
              <SearchForBook />
            </Route>
            <Route path="/">
              <BookList />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default BooksApp;
