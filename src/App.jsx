import React, { useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import MovieList from './Components/MovieList/MovieList';
import axios from 'axios';

const App = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    setError('');
    setLoading(true); 

    if (searchQuery) {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?s=${searchQuery}&apikey=d3f6888c`);
        if (response.data.Response === 'True') {
          setMovies(response.data.Search || []);
          setError('');
        } else {
          setMovies([]);
          setError('No movies found!');
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
        setError('There was an error fetching the data.');
      }
    } else {
      setMovies([]); 
      setError('');
    }

    setLoading(false); 
  };

  return (
    <div className="App">
      <h1>Movie Search</h1>
      <SearchBar onSearch={handleSearch} />
      
      {loading && <p>Loading...</p>}

      {error && !loading && <p className="error-message">{error}</p>}

      
      {!loading && movies.length > 0 && !error && <MovieList movies={movies} />}
    </div>
  );
};

export default App;
