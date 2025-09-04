import React from 'react';

export default function MovieCard({ movie, onClick }) {
  return (
    <div onClick={() => onClick(movie.imdbID)}
         className="bg-white rounded shadow p-4 cursor-pointer hover:shadow-lg transition">
      <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
           alt={movie.Title}
           className="w-full h-64 object-cover rounded"/>
      <h2 className="text-lg font-semibold mt-2">{movie.Title}</h2>
      <p className="text-gray-600">{movie.Year}</p>
    </div>
  );
}
