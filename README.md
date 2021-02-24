# MyReads Project

## TL;DR

-   install all project dependencies with `npm install`
-   start the development server with `npm start`

## How to use?

-   Homepage (http://localhost:3000 - port might differ) contains current book shelves (Read, Want to Read, Currently Reading).
-   Each book can be moved to another shelf by changing it on dropdown menu.
-   On search page (http://localhost:3000/search) user can look up for new books and add them in the reading library.

## Structure

```bash
├── CONTRIBUTING.md
├── README.md
├── SEARCH_TERMS.md
├── package.json
├── .eslintrc # used for ESlint rules
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── api
    │    └── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── components
    │    ├── BookItem.js
    │    ├── BookList.js
    │    ├── BookShelf.js
    │    ├── BookShelfChanger.js
    │    ├── SearchBar.js
    │    ├── SearchForBook.js
    │    └── BookShelf.js
    ├── App.css
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing.
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles
    └── index.js
```

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

-   [`getAll`](#getall)
-   [`update`](#update)
-   [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

-   Returns a Promise which resolves to a JSON object containing a collection of book objects.
-   This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

-   book: `<Object>` containing at minimum an `id` attribute
-   shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
-   Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

-   query: `<String>`
-   Returns a Promise which resolves to a JS ON object containing a collection of a maximum of 20 book objects.
-   These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
