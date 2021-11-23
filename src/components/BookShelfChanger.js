import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookShelfChanger = ({
    currentShelf = 'none',
    onChange: passedOnChange,
}) => {
    const [shelfValue, setShelfValue] = useState(currentShelf);

    const handleChange = (event) => {
        const { value } = event.target;

        setShelfValue(value);

        passedOnChange?.(value);
    };

    return (
        <div>
            <div className="book-shelf-changer">
                <select defaultValue={shelfValue} onChange={handleChange}>
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
};

BookShelfChanger.propTypes = {
    currentShelf: PropTypes.string,
    onChange: PropTypes.func,
};

export default BookShelfChanger;
