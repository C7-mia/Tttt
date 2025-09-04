import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard.jsx";
import MovieDetails from "../components/MovieDetails.jsx";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch popular movies on mount
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        );
        setMovies(response.data.results);
        setError("");
      } catch (err) {
        setError("Failed to load popular movies.");
      }
    };

    fetchPopularMovies();
  }, []);

  // Fetch movie details when clicked
  const handleMovieClick = async (movieId) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
      );
      setSelectedMovie(response.data);
    } catch (err) {
      setError("Failed to load movie details.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">🔥 Popular Movies</h2>

      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.length > 0 ? (
          movies.map((movie) => (
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
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            Loading movies...
          </p>
        )}
      </div>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}
