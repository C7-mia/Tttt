import React from "react";

export default function MovieDetails({ movie, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >     
        </button>
        <div className="flex flex-col md:flex-row gap-6">
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-64 rounded-lg"
            />
          )}
          <div>
            <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
            <p className="text-gray-600 mb-2">
              Release Date: {movie.release_date || "N/A"}
            </p>
            <p className="text-gray-600 mb-2">
              Rating:  {movie.vote_average || "N/A"}
            </p>
            <p className="text-gray-800">{movie.overview || "No description available."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
