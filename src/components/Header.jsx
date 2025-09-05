import React from "react";
import SearchBar from "./SearchBar.jsx";

export default function Header({ searchTerm, setSearchTerm, handleSearch }) {
  return (
    <header className="bg-gray-900 text-white p-4 flex flex-col md:flex-row md:items-center md:justify-between">
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold mb-2 md:mb-0">🎬 Movie Cloudie</h1>

      {/* Search bar in header */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
    </header>
  );
}
EOFcat <<'EOF' > src/components/Header.jsx
import React from "react";
import SearchBar from "./SearchBar.jsx";

export default function Header({ searchTerm, setSearchTerm, handleSearch }) {
  return (
    <header className="bg-gray-900 text-white p-4 flex flex-col md:flex-row md:items-center md:justify-between">
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold mb-2 md:mb-0">🎬 Movie Cloudie</h1>

      {/* Search bar in header */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
    </header>
  );
}
