import React from "react";
import MovieCard from "../components/MovieCard.jsx";

export default function Home({ movies, error, handleMovieClick }) {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Search Results</h2>

      {/* Error message */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Movies Grid */}
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
            No movies to show. Try searching above.
          </p>
        )}
      </div>
    </div>
  );
}
