import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MoviesList = () => {
    const movies = useSelector(state => state.movies.movies);
    console.log(movies)
    return (
        <div className="movies-container">
            <h4>Recommended for You</h4>

            <div className="movies-contents">
                {
                    movies && movies.map(movie => {
                        return (
                            <div key={movie.id} className="movies-contents__item">
                                <Link to={`/details/${movie.id}`} >
                                    <img
                                        alt="movies"
                                        src={movie.cardImg}
                                    />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MoviesList
