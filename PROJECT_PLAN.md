# Step by Step Guide for Building the MyReads App

## Links

- [Project page](https://classroom.udacity.com/nanodegrees/nd019/parts/57812373-5147-4152-a4f7-d2e164aba8a5/modules/69a69d44-f8a8-4214-95ff-3a5e8df4dd44/lessons/af43b9f8-6162-4c91-8462-f736f244f479/concepts/6ccc69ed-2d8b-451e-8031-e9ff0cdce7d4)
- [Overview](https://classroom.udacity.com/nanodegrees/nd019/parts/57812373-5147-4152-a4f7-d2e164aba8a5/modules/69a69d44-f8a8-4214-95ff-3a5e8df4dd44/lessons/af43b9f8-6162-4c91-8462-f736f244f479/concepts/e7df4589-29d8-4d49-b760-a1db72d6cbdb)
- Mock up tools - https://codingsans.com/blog/mockup-tools
  - https://www.figma.com/templates/wireframe-kits/
- Refer to Asana.

## Component hierarchy

```
├── MyApp
   ├── BookList
        ├── Header
        ├── BookShelf
            ├── BookShelfTitle
            ├── BookItem
            ├── BookItem
            ├── BookItem
   └── SearchForBook
        ├── SearchBar
        ├── SearchResult
            ├── BookItem
```

## Data needed

```
App
BookItem
    - Book cover url
    - Book title
    - Book authors
    - Current shelf
BookShelf
    - Title
    - Shelf type
    - Books
SearchForBook
    - Query
    - SearchResult
        - Search results by query
```

## Where data lives

```
App
    - Book
    - Book cover url
    - Book title
    - Book authors
    - Book shelf assigned
SearchForBook
    - Query
    - SearchResult
        - Search results by query
```
