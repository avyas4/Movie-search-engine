import React, { useState, useEffect, useCallback } from 'react';
import './ListComponent.style.scss';
import PropTypes from "prop-types";
import MovieDetails from '../MovieDetails/MovieDetails';
import services from '../../services/services';

/**
 *  Show Movie Listcomponent
 */
const ListComponent = ({ data, searchTerm }) => {
    const [title, getTitle] = useState('');
    const [post, getPosts] = useState({});
    const [active, setActive] = useState(null);

    /**
     *  update query on movie title
     */
    useEffect(() => {
        services('', title, '').then(res => {
            getPosts(res);
        });
    }, [title]);

    /**
    *  update query on input change
    */
    useEffect(() => {
        services(searchTerm, '', '').then(() => {
            getPosts({});
        });
    }, [searchTerm]);

    /**
    *  Render list 
    */
    const NavLink = ({ imdbID, Title, Year, isActive, onClick }) => (
        <div role="button" tabIndex={imdbID} onKeyDown={() => { }} onClick={useCallback(() => onClick(imdbID), [imdbID])} className={`listComponent__listContainer ${isActive ? 'active' : ''}`}>
            <h4 className="listComponent__title">{`${Title} ${isActive ? '- active' : ''} `}</h4>
            <p>{Year}</p>
        </div>
    );
  
    return (
        <React.Fragment>
            <div className="listComponentContainer">
                <ul className="listComponent">
                    { data && data.map((object) => (
                        <li
                            key={object.imdbID}
                            tabIndex={object.imdbID}
                            className="listComponent__li"
                            role='presentation'
                            onClick={() => { getTitle(object.Title); }} onKeyDown={() => { }}>
                            <NavLink
                                {...object}
                                onClick={setActive}
                                isActive={active === object.imdbID} />
                        </li>
                    ))}
                </ul>
            </div>
            <MovieDetails jsonObject={post} searchTerm={searchTerm} />
        </React.Fragment>
    );
};

ListComponent.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        imdbID: PropTypes.string,
        Title: PropTypes.string,
        Year: PropTypes.string
    })).isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.string.isRequired,
    searchTerm: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired
};
export default ListComponent;
