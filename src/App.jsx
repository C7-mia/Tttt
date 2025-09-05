import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header.";
import Navbar from "./components/Navbar.jsx";
import MovieDetails from "./components/MovieDetails.jsx";

import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import Favorites from "./pages/Favorites.jsx";
import About from "./pages/About.jsx";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    try {
      const response = await axios.get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          searchTerm
        )}`
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
    <Router>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <Navbar />

      <main className="p-4">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                movies={movies}
                error={error}
                handleMovieClick={handleMovieClick}
                selectedMovie={selectedMovie}
                setSelectedMovie={setSelectedMovie}
              />
            }
          />
          <Route path="/movies" element={<Movies />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </Router>
  );
}

export default App;
