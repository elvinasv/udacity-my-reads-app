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
        this.handleBookShelfChange = this.handleBookShelfChange.bind(this);
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

    handleBookShelfChange(book, newShelfValue) {
        const oldBooks = this.state.books.filter(
            (oldBook) => oldBook.id !== book.id
        );
        const updatedBook = { ...book, shelf: newShelfValue };

        const booksToUpdate = [
            ...oldBooks,
            newShelfValue !== 'none' ? updatedBook : undefined,
        ].filter(Boolean);

        BooksAPI.update(book, newShelfValue).then(() => {
            this.setState(() => ({ books: booksToUpdate }));
        });
    }

    render() {
        return (
            <Router>
                <div className="app">
                    <Switch>
                        <Route path="/search">
                            <SearchForBook
                                selectedBooks={this.state.books}
                                onBookShelfChange={this.handleBookShelfChange}
                            />
                        </Route>
                        <Route path="/">
                            <BookList
                                books={this.state.books}
                                onBookShelfChange={this.handleBookShelfChange}
                            />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default BooksApp;
