import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SearchForBook from './components/SearchForBook';
import BookList from './components/BookList';

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
