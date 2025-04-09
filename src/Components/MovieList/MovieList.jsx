import React from 'react';
import './MovieList.css';

const MovieList = ({ movies, loading, error }) => {
  
  if (loading) {
    return <p>Loading...</p>;
  }

  
  if (error) {
    return <p>{error}</p>;
  }

  
  if (movies.length === 0) {
    return <p>No movies found!</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-card">
          <img src={movie.Poster} alt={movie.Title} />
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
