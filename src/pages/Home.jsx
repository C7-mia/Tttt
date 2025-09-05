import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar.jsx";
import MovieCard from "../components/MovieCard.jsx";
import MovieDetails from "../components/MovieDetails.jsx";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState("");

  // 🔍 Search movies
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    try {
      const response = await axios.get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchTerm)}`
      );
      if (response.data.results.length > 0) {
        setMovies(response.data.results);
        setError("");
      } else {
        setError("No results found.");
        setMovies([]);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  // 🎬 Fetch movie details
  const handleMovieClick = async (movieId) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
      );
      setSelectedMovie(response.data);
    } catch (err) {
      setError("Failed to load movie details.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-6">🎬 Movie Cloudie</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={{
              id: movie.id,
              title: movie.title,
              poster_path: movie.poster_path,
              release_date: movie.release_date,
            }}
            onClick={handleMovieClick}
          />
        ))}
      </div>

      {/* Movie Details */}
      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}
