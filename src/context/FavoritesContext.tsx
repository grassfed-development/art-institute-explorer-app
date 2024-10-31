import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Artwork } from '../types/ArtInstituteTypes';

interface FavoritesContextType {
  favorites: Artwork[];
  addFavorite: (artwork: Artwork) => void;
  removeFavorite: (artworkId: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<Artwork[]>([]);

  const addFavorite = (artwork: Artwork) => {
    setFavorites((prev) => [...prev, artwork]);
  };

  const removeFavorite = (artworkId: number) => {
    setFavorites((prev) => prev.filter((art) => art.id !== artworkId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
