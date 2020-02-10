import React from 'react';
import './MovieDetails.style.scss';
import PropTypes from "prop-types";

/**
 *  Show Movie Details component
 */
const MovieDetails = ({ jsonObject, searchTerm }) => {
    return (
        <section className="movieDetails column-right">
            {(jsonObject.Title && searchTerm) && (
                <div className="row">
                    <div className="column">
                        <article>
                            <header className="movieDetails__header">
                                <h2>{jsonObject.Title}</h2>
                                <p>{jsonObject.Genre}</p>
                            </header>
                            {jsonObject.Poster && jsonObject.Poster !== "N/A" && (
                                <img
                                    alt="poster"
                                    height="200px"
                                    width="200px"
                                    src={jsonObject.Poster}
                                ></img>
                            )}
                            <p className="movieDetails__content">{jsonObject.Plot}</p>
                            <ul>
                                <li>
                                    <strong>Language</strong>
                                    <p>{jsonObject.Language}</p>
                                </li>
                                <li>
                                    <strong>Director</strong>
                                    <p>{jsonObject.Director}</p>
                                </li>
                                <li>
                                    <strong>Actors</strong>
                                    <p>{jsonObject.Actors}</p>
                                </li>
                                <li>
                                    <strong>Duration</strong>
                                    <p>{jsonObject.Runtime}</p>
                                </li>
                            </ul>
                        </article>
                    </div>
                </div>
            )}
            {(jsonObject.Error === "Movie not found!" && searchTerm) && (
                <div className="row">
                    <div className="column">
                        <article>
                            <h2>Movie not found!</h2>
                        </article>
                    </div>
                </div>
            )}
        </section>
    );
};

MovieDetails.propTypes = {
    jsonObject: PropTypes.objectOf(PropTypes.shape({
        Genre: PropTypes.string,
        Title: PropTypes.string,
        Poster: PropTypes.string,
        Writer: PropTypes.string,
        Language: PropTypes.string,
        Director: PropTypes.string,
        Actors: PropTypes.string,
        Runtime: PropTypes.string,
        Error: PropTypes.string,
    })).isRequired,
    searchTerm: PropTypes.string.isRequired
};
export default MovieDetails;
