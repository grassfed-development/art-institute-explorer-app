import React, { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { ArtworkList } from '../components/ArtworkList';
import { ApiService } from '../services/ApiService';

export const HomePage: React.FC = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query: string) => {
    const results = await ApiService.searchArtworks(query);
    setSearchResults(results);
  };

  return (
    <div>
      <h1>Art Institute of Chicago Explorer</h1>
      <SearchBar onSearch={handleSearch} />
      <ArtworkList artworks={searchResults} />
    </div>
  );
};
