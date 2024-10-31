import React, { useState, useEffect } from 'react';
import { ApiService } from './services/ApiService';
import { Artwork, Artist, Exhibition } from './types/ArtInstituteTypes';

function App() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);
  const [exhibitions, setExhibitions] = useState<Exhibition[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const artworksData = await ApiService.getArtworks(page);
        const artistsData = await ApiService.getArtists();
        const exhibitionsData = await ApiService.getExhibitions();

        setArtworks(artworksData.data);
        setArtists(artistsData.data);
        setExhibitions(exhibitionsData.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [page]);

  return (
    <div className="App">
      <h1>Art Institute of Chicago Explorer</h1>

      <h2>Artworks</h2>
      <ul>
        {artworks.map((artwork) => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>

      <h2>Artists</h2>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.title}</li>
        ))}
      </ul>

      <h2>Exhibitions</h2>
      <ul>
        {exhibitions.map((exhibition) => (
          <li key={exhibition.id}>{exhibition.title}</li>
        ))}
      </ul>

      <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
        Previous Page
      </button>
      <button onClick={() => setPage(page + 1)}>
        Next Page
      </button>
    </div>
  );
}

export default App;

