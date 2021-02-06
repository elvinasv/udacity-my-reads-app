import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

const DEFAULT_BOOK_IMG_URL = `url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")`;

const BookItem = ({
  backgroundImageUrl = DEFAULT_BOOK_IMG_URL,
  title = 'The Hobbit',
  author = 'J.R.R. Tolkien',
}) => (
  <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 192,
          backgroundImage: backgroundImageUrl,
        }}
      />
      <BookShelfChanger />
    </div>
    <div className="book-title">{title}</div>
    <div className="book-authors">{author}</div>
  </div>
);

BookItem.propTypes = {
  backgroundImageUrl: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default BookItem;
