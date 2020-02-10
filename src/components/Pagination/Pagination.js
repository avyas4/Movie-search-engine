import React, { useState, useEffect } from 'react';
import './Pagination.style.scss';
import PropTypes from "prop-types";
import left from '../../assets/images/left.svg';
import right from '../../assets/images/right.svg';
import services from '../../services/services';
import ListComponent from '../List/ListComponent';

/**
 *  Show custom pagination component
 */
const Pagination = ({ searchTerm }) => {
    const [page, setPages] = useState(null);
    const [totalPages, setTotalPages] = useState(null);
    const [posts, setPosts] = useState([]);
    const [imgright, rightImage] = useState({ isActive: false, img: left });
    const [imgleft, lefttImage] = useState({ isActive: false, img: left });
    const [totalResults, settotalResults] = useState(0);

    /**
     *  update query on total number of results 
     */

    useEffect(() => {
        if (totalResults) {
            const value = parseInt(totalResults, 10) % 10 === 0;
            let totalNumber;
            if (value) {
                totalNumber = parseInt(totalResults, 10) / 10;
            } else {
                totalNumber = parseInt(parseInt(totalResults, 10) / 10, 10) + 1;
            }
            setPages(totalNumber);
            setTotalPages(1);
        }
    }, [totalResults]);

    /**
     *  update query on pagination and input change
     */
    useEffect(() => {
        services(searchTerm, '', totalPages).then(res => {
            setPosts(res.Search);
            settotalResults(res.totalResults);
        });
    }, [searchTerm, totalPages]);

    /**
     *  update query on pagination and input change
     */
    useEffect(() => {
        const rightTag={ isActive: false, img: left };
        const leftTag={ isActive: false, img: left };
        rightImage(rightTag);
        lefttImage(leftTag);
    }, [searchTerm]);

    /**
     *  pagination previous button click
     */
    const previousButtonOnClick = () => {
        if (totalResults && totalPages > 1) {
            const decrements = totalPages - 1;
            const rightTag={ isActive: false, img: left };
            const leftTag={ isActive: true, img: right };
            setTotalPages(decrements);
            rightImage(rightTag);
            lefttImage(leftTag);
        }
    };

    /**
     *  pagination next button click
     */
    const nextButtonOnClick = () => {
        if (totalResults && totalPages < page) {
            const increment = totalPages + 1;
            const rightTag={ isActive: true, img: right };
            const leftTag={ isActive: false, img: left };
            setTotalPages(increment);
            rightImage(rightTag);
            lefttImage(leftTag);
        }
    };

    return (
        <React.Fragment>
            <ListComponent data={posts} searchTerm={searchTerm} />
            {(page && totalResults > 10) && (
                <footer className="pagination">
                    <div>
                        <button type="button"  className={`button-left ${imgleft.isActive ? 'active' : ''}`} onClick={previousButtonOnClick}>
                            <img alt="left-arrow" src={imgleft.img} ></img>
                        </button>
                        <div className="pagination__center">
                            <p >
                                <strong>{`PAGE ${totalPages} / ${page}`}</strong>
                            </p>
                            <p>{totalResults} results</p>
                        </div>
                        <button type="button" onClick={nextButtonOnClick} className={`button-right ${imgright.isActive ? 'active' : ''}`}>
                            <img alt="right-arrow" src={imgright.img}
                            ></img>
                        </button>
                    </div>
                </footer>
            )}
        </React.Fragment>
    );
};

Pagination.propTypes = {
    searchTerm: PropTypes.string.isRequired,
};

export default Pagination;
