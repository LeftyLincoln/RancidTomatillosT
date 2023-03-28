import React from 'react';
import './SingleMovie.css';
import PropTypes from "prop-types";

const SingleMovie = ({singleMovie, showAllMovies, trailer}) => {
  return (
    <div className="single-movie" style={{backgroundImage:`url("${singleMovie.backdrop_path}")`}}>  
      <button className="single-movie-button" onClick={() => showAllMovies()}>Back To Home</button>
      <div className="movie-details">
        <h1>{singleMovie.title}</h1>
        <p>{singleMovie.tagline}</p>
        <p>Release Date: {singleMovie.release_date}</p>
        <p>Synopsis: {singleMovie.overview}</p>
        <p>Rating: {singleMovie.average_rating} 🍅 </p>
        <p>Genre: {singleMovie.genres}</p>
        <p>Runtime: {singleMovie.runtime} minutes</p>
        <video src={trailer}></video>
      </div>
    </div>
  )
}

export default SingleMovie;

SingleMovie.propTypes = {
  showAllMovies: PropTypes.func.isRequired,
  singleMovie: PropTypes.object.isRequired
}

