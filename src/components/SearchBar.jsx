import React from 'react';

export default function SearchBar({ searchTerm, setSearchTerm, handleSearch }) {
  return (
    <form onSubmit={handleSearch} className="flex justify-center my-6">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-2/3 p-2 border rounded-l-md focus:outline-none"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700">
        Search
      </button>
    </form>
  );
}
