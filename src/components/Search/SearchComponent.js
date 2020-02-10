import React, { useState } from 'react';
import './SearchComponent.style.scss';
import search from '../../assets/images/search.svg';
import Pagination from '../Pagination/Pagination';

/**
 *  Show movie search Listcomponent
 */
const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="row searchComponent">
            <div className="searchComponent__leftContainer">
                <div className="searchComponent__search">
                    <input
                        type="search"
                        className="searchComponent__input"
                        value={searchTerm}
                        onChange={handleChange}
                        placeholder="Search "
                    />
                    <img className="searchComponent__img" alt="search" src={search}></img>
                </div>
            </div>
            <Pagination searchTerm={searchTerm} />
        </div>
    );
};

export default SearchComponent;
