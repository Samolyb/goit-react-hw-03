import React from 'react';
import css from './SearchBox.module.css';
import { FaSistrix } from "react-icons/fa6";

const SearchBox = ({ filter, onFilterChange }) => {
    return (
        <div className={css.searchBox}>
            <label htmlFor="search">Find contacts by name</label>
            <input
                type="text"
                id="search"
                value={filter}
                onChange={onFilterChange}
                className={css.input}
            />
            <FaSistrix className={css.icon} />
        </div>
    );
};

export default SearchBox;