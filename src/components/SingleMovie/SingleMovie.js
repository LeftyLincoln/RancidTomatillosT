import React from 'react';
import './SingleMovie.css';
import PropTypes from "prop-types";

const SingleMovie = ({singleMovie, showAllMovies}) => {
  
  return (
    <div className="single-movie">  
      <button onClick={() => showAllMovies()}>Back To Home</button>
      <h1>{singleMovie.title}</h1>
      <p>{singleMovie.tagline}</p>
      <img className="background-image" id={singleMovie.id} key={singleMovie.id} src={singleMovie.backdrop_path} alt={`${singleMovie.title} movie poster`} />
      <p>Release Date: {singleMovie.release_date}</p>
      <p>Synopsis: {singleMovie.overview}</p>
      <p>Rating: {singleMovie.average_rating} 🍅 </p>
      <p>Genre: {singleMovie.genres}</p>
      <p>Runtime: {singleMovie.runtime} minutes</p>
    </div>
  )
}

export default SingleMovie;

SingleMovie.propTypes = {
  showAllMovies: PropTypes.func.isRequired,
  singleMovie: PropTypes.object.isRequired
}

