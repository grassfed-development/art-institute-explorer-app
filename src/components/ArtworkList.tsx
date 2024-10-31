import React from 'react';
import { Artwork } from '../types/ArtInstituteTypes';

interface ArtworkListProps {
  artworks: Artwork[];
}

export const ArtworkList: React.FC<ArtworkListProps> = ({ artworks }) => {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>{artwork.title}</li>
      ))}
    </ul>
  );
};
