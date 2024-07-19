// src/App.js
import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import { fetchMovies } from './api';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchMovies(query);
      setMovies(data);
    } catch (err) {
      setError('Failed to fetch movies');
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Movie Search</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
