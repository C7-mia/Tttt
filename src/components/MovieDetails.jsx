import React from 'react';

export default function MovieDetails({ movie, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-start pt-20 z-50 overflow-auto">
      <div className="bg-white rounded-lg p-6 max-w-3xl w-full relative">
        <button onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 font-bold">
          X
        </button>
        <div className="flex flex-col md:flex-row gap-6">
          <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200'}
               alt={movie.Title}
               className="w-full md:w-1/3 rounded"/>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">{movie.Title} ({movie.Year})</h2>
            <p className="mb-2"><strong>Genre:</strong> {movie.Genre}</p>
            <p className="mb-2"><strong>Cast:</strong> {movie.Actors}</p>
            <p className="mb-2"><strong>Plot:</strong> {movie.Plot}</p>
            <p className="mb-2"><strong>Ratings:</strong></p>
            <ul className="list-disc ml-5">
              {movie.Ratings.map((rating, idx) => (
                <li key={idx}>{rating.Source}: {rating.Value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
