import React from 'react';
import PropTypes from 'prop-types';

const BookShelfChanger = ({ currentShelf = 'none' }) => (
  <div>
    <div className="book-shelf-changer">
      <select defaultValue={currentShelf}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  </div>
);

BookShelfChanger.propTypes = {
  currentShelf: PropTypes.string,
};

export default BookShelfChanger;
