import React, {Component} from 'react';
import './Movie.css';

const Movie = ({title, poster_path, id, showSingleMovie}) => {
  return (
      <div className='single-movie-card'>
        <img className="poster-image" onClick={() => showSingleMovie(id)} id={id} key={id} src={poster_path} alt={`${title} movie poster`} />
        {/* <img className="background-image" src={background_path} alt={`${title} movie poster`} /> */}
      </div>
  );
}

export default Movie;