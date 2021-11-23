import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchBar = ({ onChange }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSearchChange = (event) => {
        setInputValue(event.target.value);

        if (onChange) onChange(event.target.value);
    };

    return (
        <div className="search-books-bar">
            <Link to="/">
                <button
                    className="close-search"
                    type="button"
                    aria-label="Close"
                />
            </Link>
            <div className="search-books-input-wrapper">
                <input
                    onChange={handleSearchChange}
                    type="text"
                    placeholder="Search by title or author"
                    value={inputValue}
                    maxLength={255}
                />
            </div>
        </div>
    );
};

SearchBar.propTypes = {
    onChange: PropTypes.func,
};

export default SearchBar;
