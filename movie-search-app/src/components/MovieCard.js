// src/components/MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.dogImage} alt="Dog" />
      <h3>{movie.title}</h3>
      <p>{movie.author_name?.[0]}</p>
      <p>{movie.first_publish_year}</p>
    </div>
  );
};

export default MovieCard;
